const jwt = require('jsonwebtoken');
const { User } = require('../models');

const SECRET = 'batata';
const JWT_CONFIG = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

const create = async (req, res) => {
  try {
    let isSafe = false;
    const { login, password } = req.body;
    if (!login || !password) return res.status(400).json({ message: 'Confira seus dados' });
    if (password.length > 4) isSafe = true;
    await User.create({ login, password });
    const TOKEN = jwt.sign({ payload: { login, admin: isSafe } }, SECRET, JWT_CONFIG);
    console.log(TOKEN);
    return res.status(200).json({ TOKEN });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Deu ruim' });
  }
};

const getMe = async (req, res) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).json({ message: 'Token not found!' });
    const { login, admin } = jwt.verify(authorization, SECRET);
    return res.status(200).json({ login, admin });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Erro Interno', error: e.message });
  }
};

const topSecret = async (req, res) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).json({ message: 'Token not found!' });
    const { login, admin } = jwt.verify(authorization, SECRET);
    if (!admin) return res.status(401).json({ message: 'Usuário nao é admin' });
    
    return res.status(200).json({ login, admin });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Erro Interno', error: e.message });
  }
};

module.exports = { create, getMe, topSecret };