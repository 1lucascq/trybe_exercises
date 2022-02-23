const employeesModel = require('../models/employeesModel');

const create = async (employeeInfo) => {
  const newEmployee = await employeesModel.create(employeeInfo);
  return { id: newEmployee.insertId, ...employeeInfo };
};

module.exports = {
  create,
};
