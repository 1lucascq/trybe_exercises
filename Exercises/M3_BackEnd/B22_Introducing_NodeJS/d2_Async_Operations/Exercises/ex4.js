const fs = require('fs').promises;
// const simpsons = JSON.parse(fs.readFileSync('./simpsons.json', 'utf-8'))
const simpsons = fs.readFile('./simpsons.json', 'utf-8')
  .then((file) => JSON.parse(file));

  
// ---> Questão 1 com .then e depois com async/await abaixo

  // .then((simpsons) => simpsons.map(({ id, name }) => console.log(`${id} - ${name}`))) 

async function printAllCharacters(file) {
  try {
    const simps = await file
    simps.forEach(char => console.log(`${char.id} - ${char.name}`));    
  } catch (error) {
    console.log(error)
  }
};
printAllCharacters(simpsons);


// 2:
function getCharacterData(id) {
  return new Promise(async (resolve, reject) => {
    const simps = await simpsons;
    const character = simps.find((char) => Number(char.id) === id);
    if(!character) reject('Id not found!')
    resolve(`${character.id} - ${character.name}`);
  })
};

getCharacterData(2)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));


// 3:

async function newSimps() {
  const simps = await simpsons;
  const newSimpsons = simps.filter(({ id }) => Number(id) !== 10 && Number(id) !== 6);
  console.log(newSimpsons)
  await fs.writeFile('./newSimpsons.json', JSON.stringify(newSimpsons));
}
newSimps()


// 4:

async function family() {
  const simps = await simpsons;
  const simpsonsFamily = simps.filter(({ id }) => [1, 2, 3, 4].includes(Number(id)));
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}
family()


// 5:
async function addToFamily() {
  const simps = await simpsons;
  const simpsonsFamily = simps.filter(({ id }) => [1, 2, 3, 4, 8].includes(Number(id)));
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}
addToFamily()


// 6:
async function changeFamily() {
  const simps = await simpsons;
  const simpsonsFamily = simps.filter(({ id }) => [1, 3, 4, 8].includes(Number(id)));
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}
changeFamily()
 
