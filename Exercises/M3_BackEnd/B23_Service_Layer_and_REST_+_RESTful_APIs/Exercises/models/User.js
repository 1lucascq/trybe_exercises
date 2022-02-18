const connection = require('./connection');

function isValid (req, res, next) {
  const { firstName, lastName, email, password } = req.body;
  const err = (field) => res.status(400).json({
    error: true,
    message: `Check the ${field} data!`
  })
  if (!firstName || typeof firstName !== 'string') return err(firstName);
  if (!lastName || typeof lastName !== 'string') return err(lastName);
  if (!email || typeof email !== 'string') return err(email);
  if (!password || typeof password !== 'string' || password.length < 6) return err(password);

  return next();
};

async function createUser (firstName, lastName, email, password) {
  console.log('createUser')
  const result = await connection.execute(
    'INSERT INTO model_example.users (firstName, lastName, email, password) VALUES (?,?,?,?)',
    [firstName, lastName, email, password]
  );
  
  return { id: result.insertId, firstName, lastName, email, password }
}
// const createAuthor = async (firstName, middleName, lastName) => {
//   const result = await connection.execute(
//     'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?,?,?)',
//     [firstName, middleName, lastName],
//   );
  
//   // return { id: result.insertId }
// }
// // No caso de retorno imediato após um "async", o "await" é dispensável.

module.exports = {
  isValid,
  createUser,

}
