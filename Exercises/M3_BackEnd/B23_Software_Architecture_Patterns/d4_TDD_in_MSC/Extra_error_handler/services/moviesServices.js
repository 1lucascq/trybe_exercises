const moviesModel = require('../models/moviesModel');

const create = async (movieInfo) => {
  const newMovie = await moviesModel.create(movieInfo);
  return { id: newMovie.insertId, ...movieInfo };
};

module.exports = {
  create,
};
