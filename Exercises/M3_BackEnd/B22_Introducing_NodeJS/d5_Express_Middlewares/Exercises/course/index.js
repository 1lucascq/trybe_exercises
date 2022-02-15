//          --> 1:
const fs = require('fs/promises');
const express = require('express');
// const rescue = require('express-rescue');
const { validateRegister, validateLogin, generateToken } = require('./validateData')
const app = express();


app.use(express.json());

app.post('/user/register', validateRegister, (_req, res) => res.status(201).json({ message: "User created!" }));

app.post('/user/login', validateLogin, (_req, res) => res.status(201).json({ token: generateToken(6) }));




//          --> Ouvindo na porta 3001

app.listen(3001, () => console.log('Rodando na 3001'));




// app.get('/simpsons', async (req, res, next) => {
//   const data = await fs.readFile('./simpsons.json', 'utf-8')
//   const simpsons = JSON.parse(data);
//   res.status(200).json(simpsons)
// });