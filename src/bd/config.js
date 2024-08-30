const { Pool } = require('pg')

const isProduction = process.env.NODE_ENV === 'production'

let pool = new Pool({
  connectionString: process.env.DATABASE_URL,  ssl: {
    rejectUnauthorized: false,
  }
})


module.exports = { pool }