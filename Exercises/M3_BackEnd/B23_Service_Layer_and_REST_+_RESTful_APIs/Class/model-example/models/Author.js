const connection = require('./connection');

function serialize(authorData) {
  return {
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_name,
    lastName: authorData.last_name
  }
}

function getFullName ({id, firstName, middleName, lastName}) {
  const fullName = [firstName, middleName, lastName]
    .filter(Boolean)
    .join(' ');
// Note que `Boolean` é uma função que recebe um parâmetro e retorna true ou false
// nesse caso, se middle_name for `undefined` ou uma string vazia o retorno será `false`
           
  return {
  id,
  firstName,
  middleName,
  lastName,
  fullName,
  };
};

async function getAll() {
  const [authors] = await connection.execute('SELECT id, first_name, middle_name, last_name FROM authors');
  return authors.map(serialize).map(getFullName);
}

module.exports = {
  getAll,
}