const express = require('express');
const app = express();
const PORT = 3000;
const Author = require('./models/Author');

app.get('/authors', async (req, res) => {
  const authors = await Author.getAll();
  console.log(authors)
  
  return res.status(200).json(authors);
})

app.listen(PORT, () => console.log(`listening on ${PORT}!`))