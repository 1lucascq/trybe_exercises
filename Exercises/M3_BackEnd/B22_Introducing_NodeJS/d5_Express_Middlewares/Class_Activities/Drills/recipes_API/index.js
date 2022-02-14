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
const bodyParser = require('body-parser');
const { authMiddleware, validateName, validatePrice } = require('./middlewares')

// const cors = require('cors');
// app.use(cors()); -->  usado para liberar o acesso a API para outras aplicações - liga front e back.

app.use(bodyParser.json());

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
  { id: 2, name: 'Caeser Salad', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
  { id: 4, name: 'Macarrão ao alho', price: 30.0, waitTime: 23 },
].sort((a, b) => a.name < b.name ? -1 : 1);

// Esta rota não passa pelo middleware de autenticação definido logo abaixo.
app.get('/open', function (req, res) {
  res.send('open!')
});

app.use(authMiddleware);  // uso do middleware de autenticação

app.get('/recipes', function (req, res) {
  res.json(recipes);
});

app.get('/recipes/search', function (req, res) {
  const { name, maxPrice } = req.query;
  const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.price < maxPrice);
  
  res.status(200).json(filteredRecipes);
})

/*
⚠️ Observação: Quando houver rotas com um mesmo radical e uma destas utilizar parâmetro de rota, as rotas mais específicas devem ser definidas sempre antes. Isso porque o Express ao resolver uma rota vai olhando rota por rota qual corresponde a URL que chegou. Se colocamos a rota /recipes/search depois da rota /recipes/:id , o Express vai entender que a palavra search como um id e vai chamar a callback da rota /recipes/:id . Tenha atenção a esse detalhe ao utilizar rotas similares na definição da sua API.
*/

app.get('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === Number(id));

  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(recipe);
});

app.put('/recipes/:id', validateName, validatePrice, function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  res.status(204).end();
});

app.delete('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});

app.get('/validateToken', function (req, res) {
  const token = req.headers.authorization;
  if (token.length !== 16) return res.status(401).json({message: 'Invalid Token!'});

  res.status(200).json({message: 'Valid Token!'})
});

app.post('/recipes', validateName, validatePrice, function (req, res) {
  const { id, name, price, waitTime } = req.body;
  recipes.push({ id, name, price, waitTime});
  res.status(201).json({ message: 'Recipe created successfully!'});
});

/*
//          --> como seria fazer um fetch
fetch(`http://localhost:3001/recipes/`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    id: 4,
    name: 'Macarrão com Frango',
    price: 30
  })
});

//          --> Requisição do tipo PUT
fetch(`http://localhost:3001/recipes/2`, {
  method: 'PUT',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'Macarrão ao alho e óleo',
    price: 40
  })
});

//          --> Requisição do tipo DELETE
fetch(`http://localhost:3001/recipes/4`, {
  method: 'DELETE',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
});
*/


//                                                  --> Drinks



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

app.get('/drinks/search', (req, res) =>  {
  const {name, minPrice} = req.query;
  const filteredResults = drinks.filter(d => d.name.includes(name) && d.price > minPrice)

  res.status(200).json(filteredResults);
})

app.get('/drinks/:id', (req, res) => {
  const {id} = req.params;
  const drink = drinks.find(d => d.id === +id);

  res.status(200).json(drink);
})

app.post('/drinks', (req, res) => {
  const { id, name, price } = req.body;
  drinks.push({id, name, price});
  res.status(201).json({ message: 'Drink created successfully!'})
});

app.put('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  return res.status(204).end();
});

app.delete('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes.splice(recipeIndex, 1);

  return res.status(204).end();
});



//          --> Adiciona o listener p/ a porta 3001
app.all('*', function (req, res) {
  return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
