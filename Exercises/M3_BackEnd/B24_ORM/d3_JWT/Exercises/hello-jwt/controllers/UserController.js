const { User } = require('../models');

const create = async (req, res) => {
  try {
    const { login, password } = req.body;
    const userData = await User.create({ login, password });
    return res.status(200).json({ id: userData.id, login, password });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Deu ruim' });
  }
};

module.exports = { create };