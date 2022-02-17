const express = require('express');
const app = express();
const PORT = 3000;
const { getAllAuthors } = require('./models/Author');
const { getAllBooks, getBooksByAuthorId, getByAuthorId  } = require('./models/Book');

app.get('/authors', async (_req, res) => {
  const authors = await getAllAuthors();
  
  return res.status(200).json(authors);
})

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;

  const author = await Author.findById(id);

  if (!author) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(author);
});

app.get('/books', async (req, res) => {
  const { author_id } = req.query;

  //    --> /books?author_id=2

  const books = (author_id)
  ? await getByAuthorId(author_id)
  : await getAllBooks();

  return res.status(200).json(books);
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const booksByAuthorId = await getBooksByAuthorId(id);
  
  return res.status(200).json(booksByAuthorId);
})


app.listen(PORT, () => console.log(`listening on ${PORT}!`))