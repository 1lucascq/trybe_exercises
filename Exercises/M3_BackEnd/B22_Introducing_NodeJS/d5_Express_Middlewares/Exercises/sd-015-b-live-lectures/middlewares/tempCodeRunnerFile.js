async function bla () {
const fs = require('fs/promises');
  const data = await fs.readFile('./simpsons.json', 'utf-8')
  const simpsons = JSON.parse(data);
  await console.log(simpsons)
}
bla();
