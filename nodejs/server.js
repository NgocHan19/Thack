require('dotenv').config(); // Load các biến môi trường từ file .env
const express = require('express');
const sql = require('mssql');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const cors = require('cors'); // Chỉ giữ một lần khai báo 'cors'
const multer = require('multer');

const app = express();
app.use(cors());
app.use(express.json());

// Cấu hình SQL Server
const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_HOST,
  database: process.env.DB_NAME,
  charset: 'utf8mb4',
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

// Kết nối đến SQL Server
sql.connect(config)
  .then(() => console.log('Đã kết nối với cơ sở dữ liệu'))
  .catch(err => console.error('Lỗi kết nối cơ sở dữ liệu:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server đang chạy trên port ${PORT}`);
});

const corsOptions = {
  origin: 'http://localhost:3000', 
  methods: 'GET, POST, PUT, DELETE',
  allowedHeaders: 'Content-Type, Authorization',
  credentials: true, 
};

// Nodemailer configuration for email sending
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});


function generateVerificationCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}


async function sendVerificationEmail(email, verificationToken) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Xác thực tài khoản',
    text: `Mã xác thực của bạn là: ${verificationToken}. Mã này sẽ hết hạn trong 5 phút.`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}


app.post('/dangky', async (req, res) => {
  const { email, password, hoTen } = req.body;
  
  if (!email || !password || !hoTen) {
    return res.status(400).json({ message: 'Thiếu thông tin đăng ký.' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationToken = generateVerificationCode();
    const tokenExpiration = new Date(Date.now() + 5 * 60 * 1000); // Token hết hạn sau 5 phút
    
    console.log('Hashed Password:', hashedPassword);
    console.log('Verification Token:', verificationToken);
    console.log('Token Expiration:', tokenExpiration);
    
    let request = new sql.Request();
    const accountResult = await request
      .input('Email', sql.NVarChar, email)
      .input('MatKhau', sql.VarBinary, Buffer.from(hashedPassword))
      .input('VerificationToken', sql.NVarChar, verificationToken)
      .input('TokenExpiration', sql.DateTime, tokenExpiration)
      .query(`
        INSERT INTO ACCOUNT (Email, MatKhau, VerificationToken, TokenExpiration, CreatedAt, TrangThai)
        VALUES (@Email, @MatKhau, @VerificationToken, @TokenExpiration, GETDATE(), 'Đã xác thực');
        SELECT SCOPE_IDENTITY() AS AccountID;
      `);
    
    const accountId = accountResult.recordset[0].AccountID;
    console.log('Account ID:', accountId);
    
    // Thực hiện các truy vấn insert tiếp theo
    request = new sql.Request(); 
    await request
      .input('AccountID', sql.Int, accountId)
      .input('RoleID', sql.Int, 2) // 'Quản lý kho'
      .query(`INSERT INTO ROLE_ACCOUNT (AccountID, RoleID, NgayDangKy) VALUES (@AccountID, @RoleID, GETDATE())`);
    
    request = new sql.Request(); 
    await request
      .input('AccountID', sql.Int, accountId)
      .input('HoTen', sql.NVarChar, hoTen)
      .query(`INSERT INTO USERPROFILE (AccountID, HoTen, NgayTaoHoSo) VALUES (@AccountID, @HoTen, GETDATE())`);
    
    const emailSent = await sendVerificationEmail(email, verificationToken);
    if (emailSent) {
      res.status(201).json({ message: 'Đăng ký thành công. Vui lòng kiểm tra email để xác thực tài khoản.' });
    } else {
      res.status(500).json({ message: 'Lỗi khi gửi email xác thực.' });
    }
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Lỗi khi đăng ký tài khoản.' });
  }
});


// OTP Verification endpoint
app.post('/xacthuctaikhoan', async (req, res) => {
  const { email, verificationToken } = req.body;

  try {
    const request = new sql.Request();
    const result = await request
      .input('Email', sql.NVarChar, email)
      .query(`SELECT VerificationToken, TokenExpiration FROM Account WHERE Email = @Email`);

    if (result.recordset.length === 0) {
      return res.status(400).json({ message: 'Email không tồn tại.' });
    }

    const { VerificationToken, TokenExpiration } = result.recordset[0];

    // Ensure both tokens are strings and trim any whitespace
    if (String(VerificationToken).trim() !== String(verificationToken).trim()) {
      return res.status(400).json({ message: 'Mã xác thực không chính xác.' });
    }

    if (new Date() > TokenExpiration) {
      return res.status(400).json({ message: 'Mã xác thực đã hết hạn.' });
    }

    await request.query(`UPDATE Account SET IsVerified = 1, VerificationToken = NULL, TokenExpiration = NULL WHERE Email = '${email}'`);
    res.json({ message: 'Xác thực tài khoản thành công.' });
  } catch (error) {
    console.error('Verification error:', error);
    res.status(500).json({ message: 'Lỗi khi xác thực tài khoản.' });
  }
});

const jwt = require('jsonwebtoken');

// Thêm logic tạo JWT token trong quá trình đăng nhập
app.post('/dangnhap', async (req, res) => {
  const { email, password } = req.body;
  try {
    const request = new sql.Request();
    // Lấy thông tin người dùng và AccountID từ bảng ACCOUNT
    const result = await request
      .input('Email', sql.NVarChar, email)
      .query('SELECT AccountID, MatKhau FROM ACCOUNT WHERE Email = @Email');

    if (result.recordset.length === 0) {
      return res.status(400).json({ message: 'Email không tồn tại.' });
    }
    const hashedPassword = result.recordset[0].MatKhau.toString();
    const match = await bcrypt.compare(password, hashedPassword);
    if (!match) {
      return res.status(401).json({ message: 'Mật khẩu không chính xác.' });
    }
    // Lấy RoleID từ bảng ROLE_ACCOUNT
    const roleResult = await request
      .input('AccountID', sql.Int, result.recordset[0].AccountID)
      .query('SELECT RoleID FROM ROLE_ACCOUNT WHERE AccountID = @AccountID');
    if (roleResult.recordset.length === 0) {
      return res.status(400).json({ message: 'Không tìm thấy vai trò của người dùng.' });
    }
    const roleID = roleResult.recordset[0].RoleID;
    const roleNameResult = await request
      .input('RoleID', sql.Int, roleID)
      .query('SELECT RoleName FROM ROLE WHERE RoleID = @RoleID');
    if (roleNameResult.recordset.length === 0) {
      return res.status(400).json({ message: 'Không tìm thấy vai trò tương ứng.' });
    }
    const roleName = roleNameResult.recordset[0].RoleName;

    // Tạo JWT token sau khi đăng nhập thành công
    const jwtSecret = process.env.JWT_SECRET || 'your_default_jwt_secret';
    const token = jwt.sign({
      userID: result.recordset[0].AccountID,
      email: email,
      roleID: roleID,  // Lưu RoleID trong JWT token
      roleName: roleName // Lưu RoleName trong JWT token
    }, jwtSecret, { expiresIn: '1h' });

    // Trả về token, userID, roleID, và roleName cho client
    res.status(200).json({
      message: 'Đăng nhập thành công!',
      token,
      userID: result.recordset[0].AccountID,
      roleID: roleID,  // Trả về roleID cho client
      roleName: roleName // Trả về roleName cho client
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Lỗi khi đăng nhập.' });
  }
});

app.get('/api/userprofile', async (req, res) => {
    try {
        const result = await sql.query('SELECT * FROM USERPROFILE');
        res.json(result.recordset);
    } catch (err) {
        console.error('Error fetching users:', err);
        res.status(500).json({ error: 'Database query failed' });
    }
});

// API danh sách nhập kho
app.get('/api/nhapkho', (req, res) => {
  const sql = `
    SELECT 
      nk.IDNK,
      nk.NgayNhap,
      nk.TongGiaTri,
      nk.TrangThai,
      nk.GhiChu,
      nk.UserID,
      nklk.IDLK,
      nklk.SoLuong,
      nklk.GiaNhap
    FROM 
      NHAPKHO nk
    LEFT JOIN 
      NHAPKHO_LINHKIEN nklk ON nk.IDNK = nklk.IDNK
    ORDER BY 
      nk.IDNK;
  `;
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Lỗi truy vấn:', err);
      return res.status(500).json({ message: 'Có lỗi xảy ra khi truy vấn cơ sở dữ liệu.', error: err });
    }
    res.status(200).json(result);
  });
});
