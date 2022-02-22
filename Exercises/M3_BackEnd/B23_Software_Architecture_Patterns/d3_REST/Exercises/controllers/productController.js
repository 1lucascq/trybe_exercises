const express = require('express');
const ProductService = require('../services/productService');

const router = express.Router();

app.use(express.json())

router.get('/products', async (req, res, next) => {
  const products = await ProductService.getAll();

  res.status(200).json(products);
});

router.get('/products/:id', async (req, res, next) => {
  const product = await ProductService.getById(req.params.id);

  res.status(200).json(product);
});

router.post('/products', async (req, res) => {
  const { name, brand } = req.body;

  const newProduct = await ProductService.add(name, brand);

  res.status(201).json(newProduct);
});

router.delete('/products/:id', async (req, res) => {
  const products = await ProductService.exclude(req.params.id);

  res.status(200).json(products);
});

router.put('/products/:id', async (req, res) => {
  const { name, brand } = req.body;

  const products = await ProductService.update(req.params.id, name, brand);

  res.status(200).json(products);
});

module.exports = router;