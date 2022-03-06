const { connection } = require("./connection");

const create = async (employeesInfo) => {
  const { firstName, lastName, document: cpf, office, active } = employeesInfo;
  const query =
  "INSERT INTO exercises.employees (first_name, last_name, document, office, active) VALUES(?, ?, ?, ?, ?);";
  console.log(firstName, lastName, cpf, office, active)
  const [result] = await connection.execute(query, [firstName, lastName, cpf, office, active]);
  return result;
};

module.exports = {
  create,
};
