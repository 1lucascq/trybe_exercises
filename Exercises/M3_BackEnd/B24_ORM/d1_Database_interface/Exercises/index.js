const express = require('express');

const BooksController = require('./controllers/BooksController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/books', BooksController);

app.listen(PORT, () => console.log(`On: ${PORT}!`));

module.exports = app;