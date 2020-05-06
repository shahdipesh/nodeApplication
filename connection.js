const mysql = require('mysql2');
require('dotenv').config();

console.log('URL, USER, PASSWORD ',process.env.URL, process.env.DB_USERNAME, process.env.DB_PASSWORD);

// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool({
  host: process.env.URL,
  user: process.env.DB_USERNAME,
  password:process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});
module.exports = pool;