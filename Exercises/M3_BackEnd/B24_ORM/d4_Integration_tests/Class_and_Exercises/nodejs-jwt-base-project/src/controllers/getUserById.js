const { User } = require('../models');

module.exports = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { authorization } = req.headers;
    if (!authorization) return res
      .status(401)
      .json({
        message: 'Token não encontrado ou informado',
      });


      const tokenData = jwt.verify(authorization, JWT_KEY);

      const userData = await User.findOne({ where: { id: tokenData.id } });
  
      if (!authorization || !tokenData.id || !userData) throw Error;
  
      if (
        req.param &&
        req.params.id &&
        Number(tokenData.id) !== Number(req.params.id)
      )
        return res
          .status(401)
          .json({
            message: 'Acesso negado',
          });
      
    if (!userData) throw Error;

    res.status(200).json(userData);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Erro ao buscar usuários no banco', error: err.message });
  }
};