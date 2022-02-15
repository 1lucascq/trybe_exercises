const fs = require('fs/promises');

async function createSimpson(req, res, _next) {
  const { id, name } = req.body;
  const data = await fs.readFile('./simpsons.json', 'utf-8')
  const simpsons = JSON.parse(data);
  const newSimpson = { id: +id, name };
  const newSimpsonsArray = [...simpsons, newSimpson];
  
  fs.writeFile('./simpsons.json', JSON.stringify(newSimpsonsArray));
  
  return res.status(201).json({ message: 'Simpson criado com sucesso!' });
}

module.exports = createSimpson;