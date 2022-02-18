const express = require('express');
const User = require('./models/User');
const app = express()
const port = 3000

app.use(express.json());

app.get('/users', async (req, res) => {

  const users = await User.getUsers();

  if (!users.length) return res.status(200).json([]);

  return res.status(200).json(users);
});

app.get('/users/:id', async (req, res) => {
  const { id } = req.params;
  const user = await User.getUser(id);

  if (!user) return res.status(404).json({ message: 'not found' });

  return res.status(200).json(user);
});

app.put('/users/:id', User.isValid, async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const { id } = req.params;
  
  const user = await User.updateUser(id, firstName, lastName, email, password);

  const oldUserData = await User.getUser(id);
  if (!oldUserData) return res.status(404).json({ message: 'not found' });

  return res.status(200).json(user);
});


app.post('/users', User.isValid, async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const newUser = await User.createUser(firstName, lastName, email, password);

  return res.status(201).json(newUser);
});

app.listen(port, () => console.log(`Listening on port ${port}!`))