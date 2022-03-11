require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const { PORT } = process.env;

const middlewares = require('./middlewares');
const UserController = require('./controllers/UserController');

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(bodyParser.json());

// descobrir depois pra que serve esse coiso de baixo
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/users', UserController.create);
app.get('/users/me', UserController.getMe);

app.use(middlewares.error);

app.listen(PORT, () => console.log(`On: ${PORT}`));
