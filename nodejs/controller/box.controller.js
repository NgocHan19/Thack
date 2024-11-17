import {getDatabase} from '../database/database.js'
import sql from 'mssql'
export const getBox = async (req, res) => {
    try {
        const pool = await getDatabase();

        if (!pool) {
            return res.status(500).json({ error: 'Không thể kết nối tới cơ sở dữ liệu' });
        }

        const result = await pool.request().query('SELECT * FROM LOHANG');
        res.json(result.recordset);
    } catch (error) {
        console.error('Có lỗi xảy ra:', error);
        res.status(500).json({ error: 'Có lỗi xảy ra khi lấy dữ liệu.' });
    }
};
export const createBox = async (req, res) => {
    console.log(req.body)
    const pool = await getDatabase()
    const result = await pool.request()                        
                            .input('TenLoHang', sql.NVarChar, req.body.TenLoHang)
                            .input('NgayNhan', sql.Date, req.body.NgayNhan)
                            .input('NguoiNhan', sql.NVarChar, req.body.NguoiNhan)
                            .input('NgayHetHanLo', sql.Date, req.body.NgayHetHanLo)
                            .input('TrangThaiLoHang', sql.NVarChar, req.body.TrangThaiLoHang)
                            .input('SoLuongLoHang', sql.BigInt, req.body.SoLuongLoHang)
                            .input('SerialNumber', sql.NVarChar, req.body.SerialNumber)
                            .input('TongGia', sql.BigInt, req.body.TongGia)
                            .input('NgaySanXuat', sql.Date, req.body.NgaySanXuat)
                            .input('Notes', sql.NVarChar, req.body.Notes)
    .query('INSERT INTO LOHANG(TenLoHang, NgayNhan, NguoiNhan, NgayHetHanLo, TrangThaiLoHang, SoLuongLoHang, SerialNumber, TongGia, NgaySanXuat, Notes) VALUES (@TenLoHang, @NgayNhan, @NguoiNhan, @NgayHetHanLo, @TrangThaiLoHang, @SoLuongLoHang, @SerialNumber, @TongGia, @NgaySanXuat, @Notes); SELECT SCOPE_IDENTITY() AS IDLo')
    console.log(result)
    res.json({
        IDLo: result.recordset[0].IDLo,
        TenLoHang: req.body.TenLoHang,
        TenL: req.body.TenLK,
        NgayNhan: req.body.NgayNhan,
        NguoiNhan:req.body.NguoiNhan,
        NgayHetHanLo: req.body.NgayHetHanLo,
        TrangThaiLoHang: req.body.TrangThaiLoHang,
        SoLuongLoHang: req.body.SoLuongLoHang,
        SerialNumber:req.body.SerialNumber,
        TongGia: req.body.TongGia,
        NgaySanXuat: req.body.NgaySanXuat,
        Notes: req.body.Notes,
        IDNCC: req.body.IDNCC,
    })
}
export const updateBox = async (req, res) => {
    const id = req.params.id
    const pool = await getDatabase()
    const result = await pool.request()
                            .input("id", sql.Int, req.params.id)
                            .input('TenLoHang', sql.NVarChar, req.body.TenLoHang)
                            .input('NgayNhan', sql.Date, req.body.NgayNhan)
                            .input('NguoiNhan', sql.NVarChar, req.body.NguoiNhan)
                            .input('NgayHetHanLo', sql.Date, req.body.NgayHetHanLo)
                            .input('TrangThaiLoHang', sql.NVarChar, req.body.TrangThaiLoHang)
                            .input('SoLuongLoHang', sql.BigInt, req.body.SoLuongLoHang)
                            .input('SerialNumber', sql.NVarChar, req.body.SerialNumber)
                            .input('TongGia', sql.BigInt, req.body.TongGia)
                            .input('NgaySanXuat', sql.Date, req.body.NgaySanXuat)
                            .input('Notes', sql.NVarChar, req.body.Notes)
                            .query('UPDATE LOHANG SET TenLoHang = @TenLoHang, NgayNhan = @NgayNhan, NguoiNhan = @NguoiNhan, NgayHetHanLo = @NgayHetHanLo, TrangThaiLoHang = @TrangThaiLoHang, SerialNumber = @SerialNumber, TongGia = @TongGia, NgaySanXuat = @NgaySanXuat, Notes = @Notes WHERE IDLo = @id')
                            console.log(result)
    if (result.rowsAffected[0] === 0) {
        return res.status(404).json({message: "Box not found"})
    }
    res.json({
        IDLo: id,
        TenLoHang: req.body.TenLoHang,
        TenL: req.body.TenLK,
        NgayNhan: req.body.NgayNhan,
        NguoiNhan:req.body.NguoiNhan,
        NgayHetHanLo: req.body.NgayHetHanLo,
        TrangThaiLoHang: req.body.TrangThaiLoHang,
        SoLuongLoHang: req.body.SoLuongLoHang,
        SerialNumber:req.body.SerialNumber,
        TongGia: req.body.TongGia,
        NgaySanXuat: req.body.NgaySanXuat,
        Notes: req.body.Notes,
        IDNCC: req.body.IDNCC,
    })
}

export const deleteBox = async (req, res) => {
    const pool = await getDatabase()
    const result = await pool.request()
                             .input('id', sql.Int, req.params.id)
                             .query('DELETE FROM LOHANG WHERE IDLo = @id')
    if (result.rowsAffected[0] === 0) {
        return res.status(404).json({message: "Box not found"})
    }
    return res.json({message: "Box deleted"})
}