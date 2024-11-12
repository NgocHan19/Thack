import sql from 'mssql'

const dbSetting = {
    user: "sa",
    password: "1234567890",
    server: "localhost",
    database: "ThackDB",
    options: {
        encrypt: false,
        trustServerCertificate: true,
        enableArithAbort: true,
    },
}

export const getDatabase = async () => {
    try {
        const pool = await sql.connect(dbSetting)
        return pool
    } catch (error) {
        console.error(error)
    }
}