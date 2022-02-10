//               -->                    MÉTODO COM CALLBACKS
/*
const fs = require('fs');

const nomeDoArquivo = 'meu-arquivo.txt';

fs.readFile(nomeDoArquivo, 'utf8', (err, data) => {
  if (err) {
    console.error(`Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`);
    process.exit(1);
  }
  console.log(`Conteúdo do arquivo: ${data}`);
});
*/

//               -->                    MÉTODO COM PROMISES

const fs = require('fs').promises;

const nomeDoArquivo = 'meu-arquivo.txt';

fs.readFile(nomeDoArquivo, 'utf8')
  .then((data) => console.log(`Conteúdo do arquivo: ${data}`))
  .catch((err) =>{
    console.log(`Não foi possível ler o arquivo ${nomeDoArquivo}. Erro: ${err}`)
    process.exit(1)
});



