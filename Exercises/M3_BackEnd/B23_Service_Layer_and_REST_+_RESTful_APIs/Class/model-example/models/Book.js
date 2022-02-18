const connection = require('./connection');
const Author = require('./Author');

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

async function isBookValid (title, authorId) {
  if (!title || typeof title !== 'string' || title.length < 2) return false;
  if (!authorId || typeof authorId !== 'number'|| !(await Author.findAuthorById(authorId))) return false;
  return true;
};

// async function createBook (title, authorId) {
//   await connection.execute(
//   'INSERT INTO model_example.books (title, author_id) VALUES (?,?)',
//   [title, authorId],
//   )
// };

const createBook = async (title, authorId) => connection.execute(
  'INSERT INTO model_example.books (title, author_id) VALUES (?,?)',
  [title, authorId],
);

module.exports = {
  getAllBooks,
  getBooksByAuthorId,
  getByAuthorId,
  isBookValid,
  createBook
}