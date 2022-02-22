const { connection } = require('./connection');

const create = async (movieInfo) => {
  const { name, rating } = movieInfo;
  const query = 'INSERT INTO exercises.movies (name, rating) VALUES(?, ?)';
  const [result] = await connection.execute(query, [name, rating]);
  return result;
};

module.exports = {
  create,
}