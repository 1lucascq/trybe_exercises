const express = require('express');
const { isValid, createUser } = require('./models/User');
const app = express()
const port = 3000

app.use(express.json());

app.post('/user', isValid, async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const newUser = await createUser(firstName, lastName, email, password);

  return res.status(201).json(newUser);
});
app.listen(port, () => console.log(`Listening on port ${port}!`))