const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'lucascq',
  password: '12345679',
  database: 'model_example'});

module.exports = connection;