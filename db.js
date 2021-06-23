const Pool = require('pg').Pool
const pool = new Pool({
  user: 'tapiotyynela',
  host: 'localhost',
  database: 'savingsdb',
  password: 'password',
  port: 5432,
})

module.exports = {
  pool
}