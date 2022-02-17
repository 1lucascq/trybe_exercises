const fs = require('fs');
function readFiles(file) {
  
  try {
    const fileContent = fs.readFileSync(file, 'utf8');
    return fileContent;
  } catch (error) {
    return null;
  }
}

module.exports = readFiles;