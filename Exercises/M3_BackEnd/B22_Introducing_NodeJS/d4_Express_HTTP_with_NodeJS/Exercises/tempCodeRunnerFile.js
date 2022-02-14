const crypto = require('crypto');

function generateToken() {
  return crypto.randomBytes(1).toString('hex');
}
console.log(generateToken())