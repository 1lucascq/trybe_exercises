const fs = require('fs');

module.exports = (file, text) => {
  fs.writeFileSync(file, text, 'utf-8');
  return 'Ok!'
}