//                                                  --> Drinks
const express = require('express');
const router = express.Router();



const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
].sort((a, b) => a.name < b.name ? -1 : 1);

router.get('/', (_req, res) => {
  res.json(drinks);
});

router.get('/search', (req, res) =>  {
  const {name, minPrice} = req.query;
  const filteredResults = drinks.filter(d => d.name.includes(name) && d.price > minPrice)

  res.status(200).json(filteredResults);
})

router.get('/:id', (req, res) => {
  const {id} = req.params;
  const drink = drinks.find(d => d.id === +id);

  res.status(200).json(drink);
})

router.post('/', (req, res) => {
  const { id, name, price } = req.body;
  drinks.push({id, name, price});
  res.status(201).json({ message: 'Drink created successfully!'})
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  return res.status(204).end();
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes.splice(recipeIndex, 1);

  return res.status(204).end();
});


module.exports = router;