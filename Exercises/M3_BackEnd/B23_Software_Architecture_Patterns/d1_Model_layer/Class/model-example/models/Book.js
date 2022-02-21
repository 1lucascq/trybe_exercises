// const connection = require('./connection');
// const Author = require('./Author');

// function serialize(authorData) {
//   return {
//     id: authorData.id,
//     title: authorData.title,
//     authorId: authorData.author_id
//   }
// }

// async function getAllBooks() {
//   const [books] = await connection.execute('SELECT id, title, author_id FROM books');
//   return books.map(serialize);
// }

// async function getByAuthorId(authorId) {
//   const query = 'SELECT * FROM model_example.books WHERE author_id=?;'
//   const [books] = await connection.execute(query, [authorId]);

//   return books.map(({ id, title, author_id }) => ({
//     id,
//     title,
//     authorId: author_id,
//   }));
// };

// async function getBooksByAuthorId(bookId) {
//   const [books] = await connection.execute('SELECT id, title, author_id FROM books');
//   return books.map(serialize).filter(({id}) => id === +bookId);
// }

// async function isBookValid (title, authorId) {
//   if (!title || typeof title !== 'string' || title.length < 2) return false;
//   if (!authorId || typeof authorId !== 'number'|| !(await Author.findAuthorById(authorId))) return false;
//   return true;
// };

// // async function createBook (title, authorId) {
// //   await connection.execute(
// //   'INSERT INTO model_example.books (title, author_id) VALUES (?,?)',
// //   [title, authorId],
// //   )
// // };

// const createBook = async (title, authorId) => connection.execute(
//   'INSERT INTO model_example.books (title, author_id) VALUES (?,?)',
//   [title, authorId],
// );

// module.exports = {
//   getAllBooks,
//   getBooksByAuthorId,
//   getByAuthorId,
//   isBookValid,
//   createBook
// }


//                                                        --> Atividade refatorada dia 23-3

// models/Book.js

const connection = require('./connection');

const getAll = async () => {
  const [books] = await connection.execute('SELECT * FROM model_example.books;');

  return books.map(({ id, title, book_id }) => ({
    id,
    title,
    bookId: book_id,
  }));
};

const getBybookId = async (bookId) => {
  const query = 'SELECT * FROM model_example.books WHERE book_id=?;'
  const [books] = await connection.execute(query, [bookId]);

  return books.map(({ id, title, book_id }) => ({
    id,
    title,
    bookId: book_id,
  }));
};

const getById = async (id) => {
  const query = 'SELECT * FROM model_example.books WHERE id=?;'

  const [book] = await connection.execute(query, [id]);

  if (book.length === 0) return null;

  return {
    id: book.id,
    title: book.title,
    bookId: book.book_id,
  };
}

const createBook = async (title, bookId) => {
  const [book] = await connection.execute(
    'INSERT INTO model_example.books (title, book_id) VALUES (?,?)',
  [title, bookId],
  );
  return ({ id: book.insertId, title, bookId });
};

module.exports = {
  getAll,
  getById,
  getById,
  createBook,
};