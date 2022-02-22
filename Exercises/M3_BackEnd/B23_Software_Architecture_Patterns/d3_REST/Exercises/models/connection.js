require('dotenv').config();

const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: process.env.HOST, // Se necessário, substitua pelo seu host, `localhost` é o comum
  user: process.env.USER, // Se necessário, substitua pelo seu usuário para conectar ao banco na sua máquina
  password: process.env.PASSWORD, // Se necessário, substitua pela sua senha para conectar ao banco na sua máquina
  database: process.env.DB});

module.exports = connection;