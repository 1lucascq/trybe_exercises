function validateEmail(mail) {
 const validMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (mail.match(validMail))return (true)
  return (false)
}
console.log(validateEmail('bla@gmaiasdl.asdcom'))