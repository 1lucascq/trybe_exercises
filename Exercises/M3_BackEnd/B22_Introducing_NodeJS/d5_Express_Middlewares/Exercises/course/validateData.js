function validateEmail(mail) {
 const validMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (mail.match(validMail))return (true)
  return (false)
}

function validateData(user, email, pass) {
  if(user.length < 4 || validateEmail(email) !== true || (pass <= 4 && pass > 8)) return false;
  return true
}

module.exports = validateData;