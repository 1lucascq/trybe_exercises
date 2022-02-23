const moviesServices = require('../services/moviesServices');

const create = async (req, res) => {
	const newMovie = await moviesServices.create(req.body);
	return res.status(201).json(newMovie);
};

module.exports = {
    create,
};
