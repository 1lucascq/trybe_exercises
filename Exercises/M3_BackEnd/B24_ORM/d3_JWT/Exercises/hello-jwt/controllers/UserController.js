const jwt = require('jsonwebtoken');
const { User } = require('../models');

const SECRET = 'batata';
const JWT_CONFIG = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const create = async (req, res) => {
  try {
    const { login, password } = req.body;
    const userData = await User.create({ login, password });
    const TOKEN = jwt.sign({ userData }, SECRET, JWT_CONFIG);
    console.log(TOKEN);
    return res.status(200).json({ TOKEN });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Deu ruim' });
  }
};

module.exports = { create };