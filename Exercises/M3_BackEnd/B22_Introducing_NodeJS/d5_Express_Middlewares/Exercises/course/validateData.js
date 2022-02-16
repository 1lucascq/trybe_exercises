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

function validateToken(req, res, next) {
  const { token } = req.headers;
  if (typeof token !== 'string' || token.length !== 12) {
    return res.status(401).json({ message: 'Invalid token!' });
  }
  return next();
}

const isValid = (req, res, next) => {
  const { name, initials, country } = req.body;

  if(
    !name || name.length < 5 ||
    !initials || initials.length > 3 ||
    !country || country.length < 3
  )
    return res.status(400).json({ message: 'invalid data' });

  next();
};

module.exports = { validateRegister, validateLogin, generateToken, validateToken, isValid };

