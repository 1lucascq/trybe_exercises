const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'lucascq',
  password: '12345679',
  host: 'localhost',
  database: 'model_example'
})

module.exports = connection;