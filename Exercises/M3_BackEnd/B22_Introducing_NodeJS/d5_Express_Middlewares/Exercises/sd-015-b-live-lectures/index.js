const express = require('express');
const createSimpson = require('./middlewares/createSimpson');
const fs = require('fs/promises');
const app = express();

app.use(express.json());

app.get('/simpsons', async (req, res, next) => {
  const data = await fs.readFile('./simpsons.json', 'utf-8')
  const simpsons = JSON.parse(data);
  res.status(200).json(simpsons)
});

app.post('/simpsons', createSimpson);

app.listen(3000);