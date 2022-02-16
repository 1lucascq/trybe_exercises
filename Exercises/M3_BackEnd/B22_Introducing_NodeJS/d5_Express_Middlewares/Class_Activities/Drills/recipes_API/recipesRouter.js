/* recipesRouter.js */
const express = require('express');
const router = express.Router();
const { validateName, validatePrice } = require('./middlewares')

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Caeser Salad', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
  { id: 4, name: 'Macarrão ao alho', price: 30.0, waitTime: 23 },
].sort((a, b) => a.name < b.name ? -1 : 1);

router.get('/', function (req, res) {
  res.json(recipes);
});

router.get('/search', function (req, res) {
  const { name, maxPrice } = req.query;
  const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.price < maxPrice);
  
  res.status(200).json(filteredRecipes);
})

/*
⚠️ Observação: Quando houver rotas com um mesmo radical e uma destas utilizar parâmetro de rota, as rotas mais específicas devem ser definidas sempre antes. Isso porque o Express ao resolver uma rota vai olhando rota por rota qual corresponde a URL que chegou. Se colocamos a rota /recipes/search depois da rota /recipes/:id , o Express vai entender que a palavra search como um id e vai chamar a callback da rota /recipes/:id . Tenha atenção a esse detalhe ao utilizar rotas similares na definição da sua API.
*/

router.get('/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === Number(id));

  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(recipe);
});

router.put('/:id', validateName, validatePrice, function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  res.status(204).end();
});

router.delete('/:id', function (req, res) {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});

router.post('/', validateName, validatePrice, function (req, res) {
  const { id, name, price, waitTime } = req.body;
  recipes.push({ id, name, price, waitTime});
  const { username } = req.user; // Aqui estamos acessando o usuário encontrado no middleware de autenticação.
  recipes.push({ id, name, price, chef: username });
  res.status(201).json({ message: 'Recipe created successfully!'});
});



module.exports = router;


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
