const express = require('express');
const bodyParser = require('body-parser');
const { getAllAuthors, createAuthor, isValid } = require('./models/Author');
const Book = require('./models/Book');
const PORT = 3000;

// app.use(express.json());
const app = express();
app.use(bodyParser.json());

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
  ? await Book.getByAuthorId(author_id)
  : await Book.getAllBooks();

  return res.status(200).json(books);
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const booksByAuthorId = await Book.getBooksByAuthorId(id);
  
  return res.status(200).json(booksByAuthorId);
})


app.post('/authors', async (req, res) => {
  (console.log(req.body))
  const { first_name, middle_name, last_name } = req.body;
  
  if (!isValid(first_name, middle_name, last_name)) {
      return res.status(400).json({ message: 'Dados inválidos' });
  }

  await createAuthor(first_name, middle_name, last_name);

  res.status(201).json({ message: 'Autor criado com sucesso! '});
});

app.post('/books', async (req, res) => {
  const { title, author_id } = req.body;

  if (!Book.isBookValid(title, author_id)) {
      return res.status(400).json({ message: 'Dados inválidos' });
  }

  await Book.createBook(title, author_id);

  res.status(201).json({ message: 'Livro criado com sucesso! '});
});

app.listen(PORT, () => console.log(`listening on ${PORT}!`))