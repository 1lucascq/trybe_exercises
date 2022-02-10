const fs = require('fs').promises;
const wordsArray = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

function createFiles() {
  wordsArray.forEach((word, index) => {
    fs.writeFile(`./file${index + 1}.txt`, word)
  });
}
createFiles();

const fileNames = ['file1.txt', 'file2.txt', 'file3.txt', 'file4.txt', 'file5.txt'];

async function manageFileAll(){
  const fullName = await Promise.all(
    fileNames.map((file) => fs.readFile(file, 'utf-8') ) 
  )

  fs.writeFile('./fileAll.txt', fullName)
}

manageFileAll();