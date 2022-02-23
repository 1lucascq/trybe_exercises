const errorHandler = async (error, req, res, next) => {
  console.log(error, )

  return res.status(201).json({ status: error.status, message: error.message });
};

module.exports = { errorHandler }