function validateEmail(mail) {
 const validMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (mail.match(validMail))return (true)
  return (false)
}

function validateRegister(user, email, pass) {
  if(user.length < 4 || validateEmail(email) !== true || (pass <= 4 && pass > 8)) return false;
  return true
}

function validateLogin(email, pass) {
  if(validateEmail(email) !== true || (pass <= 4 && pass > 8)) return false;
  return true
}

//          --> Function que gera bytes aleatórios
const crypto = require('crypto');
function generateToken(n) {
  return crypto.randomBytes(n).toString('hex');
}


module.exports = { validateRegister, validateLogin, generateToken };

