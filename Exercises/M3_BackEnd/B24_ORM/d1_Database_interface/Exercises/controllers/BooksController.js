const express = require('express');
const router = express.Router();

const { Book } = require('../src/models');

router.post('/', async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  try {
    const book = await Book.create({ title, author, pageQuantity });
    return res.status(201).json(book);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.put('/:id', async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  const { id } = req.params;
  try {
    const book = await Book.findByPk(req.params.id);
    await book.update({
      title, author, pageQuantity
    })
    const updatedBook = { id, title, author, pageQuantity };
    return res.status(201).json(updatedBook);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.get('/', async (req, res) => {
  try {
    const products = await Book.findAll({ order: [ ['title', 'ASC'], ['createdAt', 'ASC'] ]});
    return res.status(200).json(products);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (!book)
      return res.status(404).json({ message: 'Produto não encontrado' });
    return res.status(200).json(book);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const book = await Book.destroy({
      where: {
        id: req.params.id,
      },
    });
    console.log(book);
    return res.status(200).json({ message: 'Deletado com Sucesso' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
});

module.exports = router;