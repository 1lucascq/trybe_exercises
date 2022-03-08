const express = require('express');

const BooksController = require('./controllers/BooksController');
const AuthorController = require('./controllers/AuthorController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/books', BooksController);
app.use('/author', AuthorController);

app.listen(PORT, () => console.log(`On: ${PORT}!`));

module.exports = app;