const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'lucascq',
  password: '12345679',
  database: 'exercises',
  port: 3306,
});

module.exports = { connection };