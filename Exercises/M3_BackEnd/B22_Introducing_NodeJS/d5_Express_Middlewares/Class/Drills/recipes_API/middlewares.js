function validateName(req, res, next) {
  const { name } = req.body;
  if (!name || name === '') return res.status(400).json({ message: 'Invalid name data!'});

  next();
};

function validatePrice(req, res, next) {
  const { price } = req.body;
  if (!price || price === '' || price <= 0) return res.status(400).json({ message: 'Invalid price data!'});

  next();
};

/* auth-middleware.js */
const validUsers = [
  { username: 'jao', password: '111' },
  { username: 'ze', password: '123' },
  { username: 'ana', password: '123' },
  { username: 'jui', password: '123' },
];

const authMiddleware = (req, res, next) => {
  const { username, password } = req.headers;

  if (!username && !password) {
    return res.status(401).json({ message: 'Username and password can`t be blank!' });
  }

  const foundUser = validUsers.find((user) => user.username === username);

  if (!foundUser) return res.status(401).json({ message: 'Invalid credentials!' });

  if (!(username === foundUser.username  && password === foundUser.password)) {
    return res.status(401).json({ message: 'Invalid credentials!' });
  }

  req.user = foundUser; // Aqui estamos passando o usuário encontrado para o próximo middleware.

  next();
};

module.exports = {authMiddleware, validateName, validatePrice};

