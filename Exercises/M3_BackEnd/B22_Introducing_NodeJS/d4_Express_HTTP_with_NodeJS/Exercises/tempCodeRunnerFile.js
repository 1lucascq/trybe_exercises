const fs = require('fs/promises')
async function getSimpsons() {
  const content = await fs.readFile('./simpsons.js', 'utf-8');
  return JSON.parse(content);
  // return fs.readFile('./simpsons.js', 'utf-8').then(fileContent => JSON.parse(fileContent));
}
async function bla() {
  console.log(await getSimpsons())
}
bla();
