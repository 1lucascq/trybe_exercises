/*

//                                 --> First Hello-World
const express = require('express');

const app = express(); // 1

app.get('/hello', handleHelloWorldRequest); // 2

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
}); // 3

function handleHelloWorldRequest(_req, res) {
  res.status(200).send('<h1>Hello World!</h1><b><h3>Testando 1, 2, 3</h3>'); // 4
}
*/

//                                  --> Structuring
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { authMiddleware } = require('./middlewares')

// const cors = require('cors');
// app.use(cors()); -->  usado para liberar o acesso a API para outras aplicações - liga front e back.

app.use(bodyParser.json());

// function objSort( a, b ) {
//   if ( a.name < b.name ){
//     return -1;
//   }
//   if ( a.name > b.name ){
//     return 1;
//   }
//   return 0;
// }


// Esta rota não passa pelo middleware de autenticação definido logo abaixo.
app.get('/open', function (req, res) {
  res.send('open!')
});

app.use(authMiddleware);  // uso do middleware de autenticação


app.get('/validateToken', function (req, res) {
  const token = req.headers.authorization;
  if (token.length !== 16) return res.status(401).json({message: 'Invalid Token!'});

  res.status(200).json({message: 'Valid Token!'})
});


const recipesRouter = require('./recipesRouter');
/* Todas as rotas com /recipes/<alguma-coisa> entram aqui e vão para o roteador. */
app.use('/recipes', recipesRouter);

const drinksRouter = require('./drinksRouter');
app.use('/drinks', drinksRouter);


//          --> Adiciona o listener p/ a porta 3001
app.all('*', function (req, res) {
  return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
