//          --> 1:
const fs = require('fs/promises');
const express = require('express');
// const rescue = require('express-rescue');
const validateData = require('./validateData')
const app = express();


app.use(express.json());

app.post('/user/register', (req, res) => {
  const { username, email, password } = req.body
  const isDataValid = validateData(username, email, password);
  
  if(!isDataValid) return res.status(400).json({ message: 'Invalid data!' })
  
  return res.status(201).json({ message: "User created!" })
})


app.listen(3001, () => console.log('Rodando na 3001'));




// app.get('/simpsons', async (req, res, next) => {
//   const data = await fs.readFile('./simpsons.json', 'utf-8')
//   const simpsons = JSON.parse(data);
//   res.status(200).json(simpsons)
// });