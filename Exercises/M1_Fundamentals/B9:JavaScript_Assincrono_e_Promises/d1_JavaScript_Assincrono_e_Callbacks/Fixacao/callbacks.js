const myExpenses = [
  {
    gym: 99,
  },
  {
    ifood: 200,
  },
  {
    phone: 60,
  },
  {
    internet: 100,
  },
];

const myIncome = 1000;

const monthlyBudget = (myIncome, myExpenses, callback) => {

  const totalExpenses = callback(myExpenses);
  const totalAfterExpenses = myIncome - totalExpenses;

  // console.log(`Balanço do mês:
  //   Recebido: R$${myIncome},00
  //   Gasto: R$${totalExpenses},00
  //   Saldo: R$${totalAfterExpenses},00 `);
};


const handleExpenses = myExpenses => {
  const eachValue = myExpenses.map((item) => Object.values(item)[0]);
  const totalExpense = eachValue.reduce((acc, curr) => acc + curr , 0);
  return totalExpense;
};

monthlyBudget(myIncome, myExpenses, handleExpenses);

// 1 - No código abaixo você tem a função getUser , que retorna uma pessoa qualquer. Complete a função getUser de forma que ela receba uma outra função como parâmetro para que possa realizar as operações abaixo sobre a pessoa retornada.
console.log('Para fixar 1:')

const assert = require('assert');

const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const getUser = (callback) => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };

  return callback(userToReturn)
};

assert.strictEqual(getUser(userFullName), "Hello! My name is Ivan Ivanovich"); // complete a chamada da função de getUser
assert.strictEqual(getUser(userNationality), "Ivan is Russian"); // complete a chamada da função de getUser

//2 - No código abaixo você tem a função getUser modificada, que agora funciona de modo assíncrono e imprime dados de uma pessoa qualquer depois de um certo tempo. Complete a função getUser de forma que ela receba um callback para que possa realizar as operações abaixo sobre a pessoa.
console.log('Para fixar 2:');
const userName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNation = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const getUser2 = (callback) => {
  setTimeout(() => {
    const user = {
      firstName: "Ivan",
      lastName: "Ivanovich",
      nationality: "Russian",
    };
    console.log(callback(user));
  }, delay());
}
getUser2(userName); // deve imprimir "Hello! My name is Ivan Ivanovich" depois de um certo tempo
getUser2(userNation); // deve imprimir "Ivan is Russian" depois de um certo tempo.
