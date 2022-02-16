//          --> 1:
const fs = require('fs/promises');
const express = require('express');
// const rescue = require('express-rescue');
// const { validateRegister, validateLogin, generateToken } = require('./validateData')
const userRouter = require('./userRouter');
const btcRouter = require('./btcRouter');
const postsRouter = require('./postsRouter');
const cors = require('cors');
const app = express();

app.use(express.json());

app.use('/user', userRouter);

app.use('/btc', btcRouter);

app.use('/posts', postsRouter);

app.use(cors())

app.listen(3001, () => console.log('Rodando na 3001'));




// app.get('/simpsons', async (req, res, next) => {
//   const data = await fs.readFile('./simpsons.json', 'utf-8')
//   const simpsons = JSON.parse(data);
//   res.status(200).json(simpsons)
// });