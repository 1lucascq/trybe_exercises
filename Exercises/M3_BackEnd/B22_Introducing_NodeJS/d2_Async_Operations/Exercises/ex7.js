const fs = require('fs').promises;
const readline = require('readline');

function question(message) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question(message, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

function changeWord(file, word, newWord, replaceAll) {
  if (replaceAll === true) return replace(new RegExp(word, 'g'), newWord);
  return file.replace(word, newWord);
}
async function start() {
  const fileName = await question('Digite o caminho do arquivo que deseja ler: ');
  try {
    const fileContent = await fs.readFile(fileName, 'utf-8');
    console.log(fileContent);

    const repWord = await question('Digite a palavra que deseja substituir: ');
    const newWord = await question('Digite a nova palava: ');
    const newFileContent = changeWord(fileContent, repWord, newWord);
    console.log(newFileContent);
    

    const newFileName = await question('Digite o nome do novo arquivo: ');
    fs.writeFile(newFileName, newFileContent,'utf8');
    console.log(`O novo arquivo foi salvo com o texto:\n ${newFileContent}`);
  } catch (err) {
    console.log('Arquivo inexistente');
    process.exit(1);
    // return '';
  }
}

start();
