// A função recebe um número qualquer de parâmetros. Todos são agregados como valores para adicionar ao objeto de destino!

// Object.assign(destino, objeto1);
// Object.assign(destino, objeto1, objeto2);
// Object.assign(destino, objeto1, objeto2, objeto3, objeto4);

const person = {
  name: 'Alberto',
  lastName: 'Gomes',
  age: 20,
};

const info = {
  age: 23,
  job: 'engenheiro',
};

const family = {
  children: ['Maria', 'João'],
  wife: 'Ana',
};

Object.assign(person, info, family)
// console.log(person)

const obj = { value1: 10, value2: 11 };
const cloneObj = obj;
// console.log(cloneObj);
cloneObj.value3 = 12;
// console.log(cloneObj);
// console.log(obj);


//Para resolver esse problema [modificação dinâmica do obj e clone], podemos passar como primeiro parâmetro do Object.assign um objeto vazio {} e armazenar seu retorno em uma nova variável. Veja como fazer isso no exemplo abaixo.

const person = {
  name:'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const newPerson = Object.assign({},person,lastName);
newPerson.name = 'Gilberto';
console.log(newPerson);
console.log(person);