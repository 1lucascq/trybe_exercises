const fs = require('fs/promises');
const express = require('express');
const app = express();
const authMiddleware = require('./authMiddleware');
const rescue = require('express-rescue');
const crypto = require('crypto');
// const bodyParser = require('body-parser');

// app.use(bodyParser.json());
app.use(express.json());
app.use(authMiddleware);

//          --> fs-utils functions

async function getSimpsons() {
  const content = await fs.readFile('./simpsons.js', 'utf-8');
  return JSON.parse(content);
  // return fs.readFile('./simpsons.js', 'utf-8').then(fileContent => JSON.parse(fileContent));
}

function setSimpsons(newSimpsons) {
  fs.writeFile('./simpsons.js', JSON.stringify(newSimpsons));
}

//          --> Exercises

app.get('/ping', (_req, res) => {
  res.status(200).json({ message: 'pong' });
});

app.post('/hello', (req, res) => {
  const { name } = req.body
  res.status(200).json({ message: `Hello, ${name}!` });
});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body
  if (age < 18) return res.status(401).json({ message: 'Unauthorized'})
  
  return res.status(200).json({ message: `Hello, ${name}!` });
});

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  return res.status(200).json({ message: `Hi, ${name}! You are ${age} years old!` });
});

// a callback toda fica dentro do rescue
app.get('/simpsons', rescue(async (req, res) => {
  const simpsons = await getSimpsons();

  return res.status(200).json(simpsons);
}));

app.get('/simpsons/:id', rescue(async (req, res) => {
  const { id } = req.params;
  
  const simpsons = await getSimpsons();
  const searchedSimpsons = simpsons.find(s => s.id === id);
  if (searchedSimpsons === undefined) return res.status(404).json({ message: 'Simpson not found' })
  return res.status(200).json(searchedSimpsons);
}));


app.post('/simpsons', rescue(async (req, res) => {
  const { id, name } = req.body;
  const simpsons = await getSimpsons();
  if (simpsons.find(s => s.id === id) !== undefined) return res.status(409).json({ message: 'Id already exists' });
  const newSimpson = { id, name };
  const newSimpsons = [ ...simpsons, newSimpson ];
  
  setSimpsons(newSimpsons)
  return res.status(204).end();
}));

app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;

  if ([email, password, firstName, phone].includes(undefined)) {
    return res.status(401).json({ message: 'missing fields' });
  }

  const token = crypto.randomBytes(8).toString('hex');

  res.status(200).json({ token });
})

//          --> Listener


app.use((err, _req, res, _next) => {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.all('*', function (req, res) {
  return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});

//          --> Function que gera bytes aleatórios
// const crypto = require('crypto');
// function generateToken() {
//   return crypto.randomBytes(1).toString('hex');
// }
