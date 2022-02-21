const express = require('express');
const bodyParser = require('body-parser');
const { getAllAuthors, createAuthor, isValid } = require('./models/Author');
const Book = require('./controllers/Book');
const errorMiddleware = require('./middlewares/error');

const PORT = 3000;

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

app.get('/books', rescue(Book.getAll));
app.get('/books/:id', rescue(Book.findById));
app.post('/books', rescue(Book.createBook));

app.post('/authors', async (req, res) => {
  (console.log(req.body))
  const { first_name, middle_name, last_name } = req.body;
  
  if (!isValid(first_name, middle_name, last_name)) {
      return res.status(400).json({ message: 'Dados inválidos' });
  }

  await createAuthor(first_name, middle_name, last_name);

  res.status(201).json({ message: 'Autor criado com sucesso! '});
});

app.use(errorMiddleware);


app.listen(PORT, () => console.log(`listening on ${PORT}!`))