// npm init -y && npm i express express-rescue mysql2 joi dotenv
// index.js

// Carregamos as variáveis de ambiente
require('dotenv').config();
const express = require('express');
const Cep = require('./controllers/CepController');
const errorMiddleware = require('./middlewares/error.js');

// Criamos a aplicação do express
const app = express();
app.use(express.json());

app.post('/cep', Cep.create);
app.get('/cep/:cep', Cep.findAddressByCep);

app.use(errorMiddleware);

// Lemos a porta da variável de ambiente, ou usamos 3000
const PORT = process.env.PORT || 3000;

// Iniciamos a aplicação ouvindo na porta informada na variável de ambiente.
app.listen(PORT, () => { console.log(`Listening on port ${PORT}`); });
