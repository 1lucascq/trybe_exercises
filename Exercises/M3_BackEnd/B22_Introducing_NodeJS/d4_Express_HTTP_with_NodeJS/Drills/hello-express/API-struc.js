const express = require('express');
const res = require('express/lib/response');
const app = express();

// const cors = require('cors');
// app.use(cors());
// usado para liberar o acesso a API para outras aplicações - liga front e back.

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

app.get('/drinks', (_req, res) => {
  res.json(drinks);
});

app.listen(3002, () => {
  console.log('listening to 3002')
});
