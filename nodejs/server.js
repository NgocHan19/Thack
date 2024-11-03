require('dotenv').config(); // Load các biến môi trường từ file .env
const express = require('express');
const sql = require('mssql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Cấu hình SQL Server
const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_HOST,
  database: process.env.DB_NAME,
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


app.get('/api/userprofile', async (req, res) => {
    try {
        const result = await sql.query('SELECT * FROM USERPROFILE');
        res.json(result.recordset);
    } catch (err) {
        console.error('Error fetching users:', err);
        res.status(500).json({ error: 'Database query failed' });
    }
});