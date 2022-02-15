function validateEmail(mail) {
 const validMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (mail.match(validMail))return (true)
  return (false)
}

function validateRegister(req, res, next) {
  const { username, password, email } = req.body;
  if(
    !username || username.length < 4 ||
    !email || validateEmail(email) !== true ||
    !password || (password <= 4 && password > 8)
    ) {
    return res.status(400).json({ message: 'Invalid data!' });
  }
  next();
}

function validateLogin(req, res, next) {
  const { password, email } = req.body;
  if(
    !email || validateEmail(email) !== true ||
    !password || (password <= 4 && password > 8)
    ) {
    return res.status(400).json({ message: 'Invalid data!' });
  }
  next();
}

//          --> Function que gera bytes aleatórios
const crypto = require('crypto');
function generateToken(n) {
  return crypto.randomBytes(n).toString('hex');
}


module.exports = { validateRegister, validateLogin, generateToken };

