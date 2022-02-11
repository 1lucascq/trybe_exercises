const express = require('express');

const app = express(); // 1

app.get('/hello', handleHelloWorldRequest); // 2

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
}); // 3

function handleHelloWorldRequest(_req, res) {
  res.status(200).send('<h1>Hello World!</h1><b><h3>Testando 1, 2, 3</h3>'); // 4
}