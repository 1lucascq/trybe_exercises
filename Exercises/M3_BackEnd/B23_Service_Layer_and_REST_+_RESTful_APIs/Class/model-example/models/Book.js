const connection = require('./connection');

function serialize(authorData) {
  return {
    id: authorData.id,
    title: authorData.title,
    authorId: authorData.author_id
  }
}

async function getAllBooks() {
  const [books] = await connection.execute('SELECT id, title, author_id FROM books');
  return books.map(serialize);
}

async function getByAuthorId(authorId) {
  const query = 'SELECT * FROM model_example.books WHERE author_id=?;'
  const [books] = await connection.execute(query, [authorId]);

  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }));
};

async function getBooksByAuthorId(bookId) {
  const [books] = await connection.execute('SELECT id, title, author_id FROM books');
  return books.map(serialize).filter(({id}) => id === +bookId);
}


module.exports = {
  getAllBooks,
  getBooksByAuthorId,
  getByAuthorId
}