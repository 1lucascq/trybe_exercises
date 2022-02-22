const express = require('express');
const ProductService = require('../services/productService');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const products = await ProductService.getAll();
    res.status(200).json(products);    
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Algo de errado não está certo.' });
  }

});

router.get('/:id', async (req, res, next) => {
  try {
    const product = await ProductService.getById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Algo de errado não está certo.' });
  }


  res.status(200).json(product);
});

router.post('/', async (req, res) => {
  try {
    const { name, brand } = req.body;
    const newProduct = await ProductService.add(name, brand);
    res.status(201).json(newProduct);    
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Algo de errado não está certo.' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const products = await ProductService.exclude(req.params.id);
    res.status(200).json(products);    
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Algo de errado não está certo.' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { name, brand } = req.body;
    const product = await ProductService.update(req.params.id, name, brand);
    res.status(200).json(product);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Algo de errado não está certo.' });
  }
});

module.exports = router;
