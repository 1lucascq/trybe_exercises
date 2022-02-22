const employeesServices = require('../services/employeesServices');

const create = async (req, res) => {
  const newEmployee = await employeesServices.create(req.body);
  return res.status(201).json(newEmployee);
};

module.exports = {
    create,
};
