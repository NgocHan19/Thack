import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
import sql from 'mssql';
import { getDatabase } from '../database/database.js';
import dotenv from 'dotenv';
dotenv.config();
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export const sendMagicLink = async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: 'Email is required' });
    }

    try {
        // Tạo JWT token chứa email với thời hạn 15 phút
        const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '15m' });
        const expiresAt = new Date(Date.now() + 15 * 60 * 1000); // Thời gian hết hạn

        // Kết nối với database
        const pool = await getDatabase()
        // Lưu token vào bảng magic_links
        const result = await pool.request()
            .input('HoTen', sql.NVarChar, req.body.HoTen)
            .input('AnhDaiDien', sql.NVarChar, req.body.AnhDaiDien)
            .input('Email', sql.VarChar, email)
            .input('GioiTinh', sql.NVarChar, req.body.GioiTinh)
            .input('DiaChi', sql.NVarChar, req.body.DiaChi)
            .input('NgaySinh', sql.Date, req.body.NgaySinh)
            .input('Token', sql.VarChar, token)
            .input('ExpiredAt', sql.DateTime, expiresAt)
            .input('IDCV', sql.Int, req.body.IDCV)
            .input('NgayTaoHoSo', sql.DateTime, req.body.NgayTaoHoSo)
            .input('NgayTaoTaiKhoan', sql.DateTime, req.body.NgayTaoTaiKhoan)
            .input('IdGoogle', sql.NVarChar, req.body.IdGoogle)
            .input('TrangThai', sql.NVarChar, req.body.TrangThai)
            .query(`INSERT INTO TAIKHOAN(HoTen, AnhDaiDien, Email, GioiTinh, DiaChi, NgaySinh, Token, ExpiredAt, IDCV, NgayTaoHoSo, NgayTaoTaiKhoan, IdGoogle, TrangThai) VALUES (@HoTen, @AnhDaiDien, @Email, @GioiTinh, @DiaChi, @NgaySinh, @Token, @ExpiredAt, @IDCV, @NgayTaoHoSo, @NgayTaoTaiKhoan, @IdGoogle, @TrangThai)`);
            console.log(result)
        // Gửi email chứa magic link
        const magicLink = `http://localhost:5000/api/verify-magic-link?token=${token}`;
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Your Magic Link',
            text: `Click the link to log in: ${magicLink}`,
        });

        res.status(200).json({ message: 'Magic link sent to email' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error sending magic link' });
    }
};
export const verifyMagicLink = async (req, res) => {
    const { token } = req.query;

    if (!token) {
        return res.status(400).json({ message: 'Token is required' });
    }

    try {
        // Kết nối với database
        const pool = await getDatabase();

        // Kiểm tra token trong bảng TAIKHOAN
        const result = await pool.request()
            .input('Token', sql.NVarChar, token)
            .query('SELECT * FROM TAIKHOAN WHERE Token = @Token AND Used = 0');
        const magicLink = result.recordset[0];
        console.log("Token received:", token);
        console.log("Query result:", result);
        if (!magicLink) {
            return res.status(400).json({ message: 'Invalid or expired token' });
        }

        // Xác minh JWT token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Cập nhật token đã được sử dụng
        await pool.request()
            .input('Token', sql.NVarChar, token)
            .query('UPDATE TAIKHOAN SET Used = 1 WHERE Token = @Token');

        res.status(200).json({ message: 'Login successful', email: decoded.email });
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Error verifying magic link' });
    }
};