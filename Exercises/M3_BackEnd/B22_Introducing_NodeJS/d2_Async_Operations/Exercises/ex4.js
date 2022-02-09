const fs = require('fs');
const simpsons = JSON.parse(fs.readFileSync('./simpsons.json', 'utf-8'))
function printAllCharacters(file) {
  // file.forEach(char => console.log(`${char.id} - ${char.name}`));
};
printAllCharacters(simpsons);

function getCharacterData(id) {
  return new Promise((resolve, reject) => {
    const character = simpsons.find((char) => Number(char.id) === id);
    if(!character) reject('Id not found!')
    resolve(`${character.id} - ${character.name}`);
  })
};

getCharacterData(2)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));