import {getDatabase} from '../database/database.js'
import sql from 'mssql'

export const ParentCat = async(req, res) => {
    try {
        const pool = await getDatabase()
        if (!pool) {
            return res.status(500).json({ error: 'Không thể kết nối tới cơ sở dữ liệu' });
        }

        const result = await pool.request().query('SELECT * FROM DANHMUC WHERE IDDMC IS NULL')
        res.json(result.recordset);
    } catch(error) {
        console.error('Có lỗi xảy ra:', error);
        res.status(500).json({ error: 'Có lỗi xảy ra khi lấy dữ liệu.' });
    }
}

export const ChildCat = async (req, res) => {
    try {
        const { IDDMC } = req.params
        const pool = await getDatabase()
        if (!pool) {
            return res.status(500).json({ error: 'Không thể kết nối tới cơ sở dữ liệu' });
        }
        const result = await pool.request()
                                            .input('IDDMC', sql.Int, IDDMC)
                                            .query('SELECT * FROM DANHMUC WHERE IDDMC = @IDDMC')
        res.json(result.recordset);
    } catch(error) {
        console.error('Có lỗi xảy ra:', error);
        res.status(500).json({ error: 'Có lỗi xảy ra khi lấy dữ liệu.' });
    }
}

export const totalCats = async (req, res) => {
    try {
        const pool = await getDatabase()
        if (!pool) {
            return res.status(500).json({ error: 'Không thể kết nối tới cơ sở dữ liệu' });
        }
        const result = await pool.request().query('SELECT COUNT(*) FROM DANHMUC')
        res.json(result.recordset);
    } catch(error) {
        console.error('Có lỗi xảy ra:', error);
        res.status(500).json({ error: 'Có lỗi xảy ra khi lấy dữ liệu.' });
    }
}

export const totalParCats = async (req, res) => {
    try {
        const pool = await getDatabase()
        if (!pool) {
            return res.status(500).json({ error: 'Không thể kết nối tới cơ sở dữ liệu' });
        }
        const result = await pool.request().query('SELECT COUNT(*) FROM DANHMUC WHERE IDDMC IS NULL')
        res.json(result.recordset);
    } catch(error) {
        console.error('Có lỗi xảy ra:', error);
        res.status(500).json({ error: 'Có lỗi xảy ra khi lấy dữ liệu.' });
    }
}

export const totalChildCats = async (req, res) => {
    try {
        const pool = await getDatabase()
        if (!pool) {
            return res.status(500).json({ error: 'Không thể kết nối tới cơ sở dữ liệu' });
        }
        const result = await pool.request().query('SELECT COUNT(*) FROM DANHMUC WHERE IDDMC IS NOT NULL')
        res.json(result.recordset);
    } catch(error) {
        console.error('Có lỗi xảy ra:', error);
        res.status(500).json({ error: 'Có lỗi xảy ra khi lấy dữ liệu.' });
    }
}

export const updateCat = async (req, res) => {
    const id = req.params.id
    const pool = await getDatabase()
    const result = await pool.request()
                                    .input("id", sql.Int, id)
                                    .input("TenDM", sql.NVarChar, req.body.TenDM)
                                    .input("MoTa", sql.NVarChar, req.body.MoTa)
                                    .input("Notes", sql.NVarChar, req.body.Notes)
                                    .query('UPDATE DANHMUC SET TenDM = @TenDM, MoTa = @MoTa, Notes = @Notes WHERE IDDM = @id')
    console.log(result)
    if (result.rowsAffected[0] === 0) {
        return res.status(404).json({message: "Product not found"})
    }
    res.json({
        IDDM: id,
        TenDM: req.body.TenDM,
        MoTa: req.body.MoTa,
        Notes: req.body.Notes,
    })
}

export const AddCats = async (req, res) => {
    console.log(req.body)
    const pool = await getDatabase()
    if (req.body.IDDMC) {
        const checkParentCategory = pool.request()
        .input('IDDMC', sql.Int, req.body.IDDMC)
        .query('SELECT IDDM FROM DANHMUC WHERE IDDM = @IDDMC');

      if (!checkParentCategory.recordset || checkParentCategory.recordset.length === 0) {
        return res.status(400).json({ error: 'IDDMC không hợp lệ. IDDMC phải khớp với một IDDM đã có.' });
      }
    }
    const result = await pool.request()
                                        .input('CodeDM', sql.NVarChar, req.body.CodeDM)
                                        .input('TenDM', sql.NVarChar, req.body.TenDM)
                                        .input('MoTa', sql.NVarChar, req.body.MoTa)
                                        .input('IDDMC', sql.Int, req.body.IDDMC || null)
                                        .input('Notes', sql.NVarChar, req.body.Notes)
    .query('INSERT INTO DANHMUC(CodeDM, TenDM, MoTa, IDDMC, Notes) VALUES (@CodeDM, @TenDM, @MoTa, @IDDMC, @Notes)')
    console.log(result)
    res.json({
        CodeDM: req.body.CodeDM,
        TenDM: req.body.TenDM,
        MoTa: req.body.MoTa,
        IDDMC: req.body.IDDMC,
        Notes: req.body.Notes,
    })
                                        
}