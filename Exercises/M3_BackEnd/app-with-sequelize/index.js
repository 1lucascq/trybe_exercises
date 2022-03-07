const express = require('express');

const UserController = require('./controllers/UserController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/user', UserController);

app.listen(PORT, () => console.log(`On: ${PORT}!`));