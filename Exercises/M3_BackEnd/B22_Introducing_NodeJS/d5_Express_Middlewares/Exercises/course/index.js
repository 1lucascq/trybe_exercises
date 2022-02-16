// const fs = require('fs/promises');
const express = require('express');

const userRouter = require('./userRouter');
const btcRouter = require('./btcRouter');
const postsRouter = require('./postsRouter');
const teamRouter = require('./teamRouter');
const errors = require('./routerNotFound');

const cors = require('cors');
const app = express();


app.use(express.json());
app.use(cors());

app.use('/user', userRouter);
app.use('/btc', btcRouter);
app.use('/posts', postsRouter);
app.use('/teams', teamRouter);


app.use('*', (_req, _res, next) => next({ statusCode: 404, message: 'Opsss router not found' }));
app.use(errors.routerNotFound);

app.listen(3001, () => console.log('Rodando na 3001'));
