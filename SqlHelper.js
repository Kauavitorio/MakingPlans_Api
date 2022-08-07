const sql = require('mssql')
const sqlConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  server: process.env.SQL_HOST,
  pool: {
    max: 2,
    min: 0,
    idleTimeoutMillis: 30000
  },
  synchronize: true,
  trustServerCertificate: true
}

const poolPromise = new sql.ConnectionPool(sqlConfig)
                            .connect()
                            .then(pool => {
                              console.log(`Connected to MSSQL\nServer: ${sqlConfig.server}\nDB: ${sqlConfig.database}\n`)
                              return pool
                            })
                            .catch(err => console.log('Database Connection Failed! Bad Config: ', err))

exports.Execute = async (query) => {
  try {        
        const pool = await poolPromise
        const result = await pool.request().query(query)      
        return result.recordset
      } catch (err) {
        return err;
      }
}

exports.pool = poolPromise;

