import {getDatabase} from '../database/database.js'
import sql from 'mssql'
export const getProducts = async (req, res) => {
    try {
        const pool = await getDatabase();

        if (!pool) {
            return res.status(500).json({ error: 'Không thể kết nối tới cơ sở dữ liệu' });
        }

        const result = await pool.request().query('SELECT * FROM LINHKIEN');
        res.json(result.recordset);
    } catch (error) {
        console.error('Có lỗi xảy ra:', error);
        res.status(500).json({ error: 'Có lỗi xảy ra khi lấy dữ liệu.' });
    }
};

export const getProduct =async (req, res)=> {
    console.log(req.params.id)
    const pool = await getDatabase()
    const result = await pool.request()
    .input('id', sql.Int, req.params.id)
    .query('SELECT * FROM LINHKIEN WHERE IDLK = @id')
    if (result.rowsAffected[0] === 0) {
        return res.status(404).json({message: "Product not found"})
    }
    return res.json(result.recordset[0])
} 

export const createProduct = async (req, res) => {
    console.log(req.body)
    const pool = await getDatabase()
    const result = await pool.request()                        
                            .input('CodeLK', sql.NVarChar, req.body.CodeLK)
                            .input('TenLK', sql.NVarChar, req.body.TenLK)
                            .input('MoTa', sql.NVarChar, req.body.MoTa)
                            .input('UOM', sql.NVarChar, req.body.UOM)
                            .input('NgaySanXuat', sql.Date, req.body.NgaySanXuat)
                            .input('GiaLK', sql.Decimal, req.body.GiaLK)
                            .input('SoLuong', sql.BigInt, req.body.SoLuong)
                            .input('IdLo', sql.BigInt, req.body.IdLo)
                            .input('CacBienThe', sql.NVarChar, req.body.CacBienThe)
                            .input('SerialNumber', sql.NVarChar, req.body.SerialNumber)
                            .input('HinhLK', sql.NVarChar, req.body.HinhLK)
                            .input('NgayHetHan', sql.Date, req.body.NgayHetHan)
                            .input('ThoiGianSuDung', sql.Int, req.body.ThoiGianSuDung)
    .query('INSERT INTO LINHKIEN(CodeLK, TenLK, MoTa, UOM, NgaySanXuat, GiaLK, CacBienThe, SerialNumber, HinhLK, NgayHetHan, ThoiGianSuDung) VALUES (@CodeLK, @TenLK, @MoTa, @UOM, @NgaySanXuat, @GiaLK, @CacBienThe, @SerialNumber, @HinhLK, @NgayHetHan, @ThoiGianSuDung); SELECT SCOPE_IDENTITY() AS IDLK')
    console.log(result)
    res.json({
        IDLK: result.recordset[0].IDLK,
        CodeLK: req.body.CodeLK,
        TenLK: req.body.TenLK,
        MoTa: req.body.MoTa,
        UOM: req.body.UOM,
        NgaySanXuat: req.body.NgaySanXuat,
        GiaLK: req.body.GiaLK,
        SoLuong:req.body.SoLuong,
        IdLo: req.body.BigInt,
        CacBienThe: req.body.CacBienThe,
        SerialNumber: req.body.SerialNumber,
        HinhLK: req.body.HinhLK,
        NgayHetHan: req.body.NgayHetHan,
        ThoiGianSuDung: req.body.ThoiGianSuDung,
    })
}

export const updateProduct = async (req, res) => {
    const id = req.params.id
    const pool = await getDatabase()
    const result = await pool.request()
            .input("id", sql.Int, req.params.id)
            .input('CodeLK', sql.NVarChar, req.body.CodeLK)
            .input('TenLK', sql.NVarChar, req.body.TenLK)
            .input('MoTa', sql.NVarChar, req.body.MoTa)
            .input('UOM', sql.NVarChar, req.body.UOM)
            .input('NgaySanXuat', sql.Date, req.body.NgaySanXuat)
            .input('GiaLK', sql.Decimal, req.body.GiaLK)
            .input('SoLuong', sql.BigInt, req.body.SoLuong)
            .input('IdLo', sql.BigInt, req.body.IdLo)
            .input('CacBienThe', sql.NVarChar, req.body.CacBienThe)
            .input('SerialNumber', sql.NVarChar, req.body.SerialNumber)
            .input('HinhLK', sql.NVarChar, req.body.HinhLK)
            .input('NgayHetHan', sql.Date, req.body.NgayHetHan)
            .input('ThoiGianSuDung', sql.Int, req.body.ThoiGianSuDung)
            .query('UPDATE LINHKIEN SET CodeLK = @CodeLK, TenLK = @TenLK, Mota = @Mota, UOM = @UOM, NgaySanXuat = @NgaySanXuat, GiaLK = @GiaLK, CacBienThe = @CacBienThe, SerialNumber = @SerialNumber, HinhLK = @HinhLK, NgayHetHan = @NgayHetHan, ThoiGianSuDung = @ThoiGianSuDung WHERE IDLK = @id')
    console.log(result)
    if (result.rowsAffected[0] === 0) {
        return res.status(404).json({message: "Product not found"})
    }
    res.json({
        IDLK: id,
        CodeLK: req.body.CodeLK,
        TenLK: req.body.TenLK,
        MoTa: req.body.MoTa,
        UOM: req.body.UOM,
        NgaySanXuat: req.body.NgaySanXuat,
        GiaLK: req.body.GiaLK,
        SoLuong:req.body.SoLuong,
        IdLo: req.body.BigInt,
        CacBienThe: req.body.CacBienThe,
        SerialNumber: req.body.SerialNumber,
        HinhLK: req.body.HinhLK,
        NgayHetHan: req.body.NgayHetHan,
        ThoiGianSuDung: req.body.ThoiGianSuDung,
    })
}

export const deleteProduct = async (req, res) => {
    const pool = await getDatabase()
    const result = await pool.request()
                             .input('id', sql.Int, req.params.id)
                             .query('DELETE FROM LINHKIEN WHERE IDLK = @id')
    if (result.rowsAffected[0] === 0) {
        return res.status(404).json({message: "Product not found"})
    }
    return res.json({message: "Product deleted"})
}