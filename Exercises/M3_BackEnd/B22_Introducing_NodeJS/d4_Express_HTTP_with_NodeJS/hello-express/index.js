/*

//                                 --> First Hello-World
const express = require('express');

const app = express(); // 1

app.get('/hello', handleHelloWorldRequest); // 2

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
}); // 3

function handleHelloWorldRequest(_req, res) {
  res.status(200).send('<h1>Hello World!</h1><b><h3>Testando 1, 2, 3</h3>'); // 4
}
*/

//                                  --> Structuring
const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
// usado para liberar o acesso a API para outras aplicações - liga front e back.

function objSort( a, b ) {
  if ( a.name < b.name ){
    return -1;
  }
  if ( a.name > b.name ){
    return 1;
  }
  return 0;
}


const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Ceaser Salad', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
].sort((a, b) => a.name < b.name ? -1 : 1);

app.get('/recipes', function (req, res) {
  res.json(recipes);
});

app.get('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === Number(id));

  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(recipe);
});


const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
].sort((a, b) => a.name < b.name ? -1 : 1);

app.get('/drinks', (_req, res) => {
  res.json(drinks);
});

app.get('/drinks/:id', (req, res) => {
  const {id} = req.params;
  const drink = drinks.find(d => d.id === +id);

  if(!drink) return res.status(404).json({ message: 'Drink not found' });

  res.status(200).json(drink);
})


app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
