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

async function getUsers () {
  const [result] = await connection.execute(
    'SELECT * FROM model_example.users');
  
  return result;
}

async function getUser (id) {
  const [result] = await connection.execute(
    'SELECT * FROM model_example.users');
  
  return result.find(us => us.id === +id);
}


async function createUser (firstName, lastName, email, password) {
  const result = await connection.execute(
    'INSERT INTO model_example.users (firstName, lastName, email, password) VALUES (?,?,?,?)',
    [firstName, lastName, email, password]
  );
  
  return { id: result.insertId, firstName, lastName, email, password };
}

module.exports = {
  isValid,
  getUsers,
  createUser,
  getUser
}
