// hello-msc/models/connection.js

const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'lucascq',
  user: 'root',
  password: '12345679',
  database: 'model_example'
});

module.exports = connection;