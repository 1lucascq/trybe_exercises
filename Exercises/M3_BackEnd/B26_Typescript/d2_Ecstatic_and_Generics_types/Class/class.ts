enum EyeColor {
  Black = "Pretos",
  Blue = "Azuis",
  Green = "Verdes",
  Brown = "Castanhos",
}

// usamos a palavra reservada class para definir uma classe
class Person {
  name: string;
  birthDate: Date; // o tipo Date está presente no TypeScript assim como no JavaScript
  eyeColor?: EyeColor; // na cor dos olhos usamos uma Enum com valores pré definidos ou undefined = ?

  // aprenderemos mais sobre o construtor no próximo bloco
  // considere-o como uma função utilizada para construir um objeto a partir da classe
  // nele recebemos todos os dados necessários para construir um objeto de pessoa
  constructor(name: string, birthDate: Date, eyeColor?: EyeColor) { // union type entre o EyeColor e undefined 
    
      // usamos o this para acessar as propriedades da instância da classe
      // ele representa a própria instância que estamos criando
      // atribuímos o valor do parâmetro recebido à propriedade da instância da classe
      this.name  = name;
      this.birthDate  = birthDate;
      this.eyeColor  = eyeColor;
  }

  speak(): void {
      console.log(`${this.name} está falando.`);
  }

  eat(): void {
      console.log(`${this.name} está comendo.`)
  }

  walk(): void {
      console.log(`${this.name} está andando.`)
  }
}

// usamos a palavra reservada new para criar uma instância de Person
// e passamos os parâmetros necessários para o construtor
const person1 = new Person("Jane Doe", new Date("1986-01-01"));
const person2 = new Person("Jon Doe", new Date("1980-08-05"), EyeColor.Black);

console.log(person1);
person1.speak()

// saída:
// Person: {
//   "name": "Jane Doe",
//   "birthDate": "1986-01-01T00:00:00.000Z",
// }
// "Jane Doe está falando."
person1.eyeColor = EyeColor.Blue
console.log(person1);
// saída:
// Person: {
//   "name": "Jane Doe",
//   "birthDate": "1986-01-01T00:00:00.000Z",
//   "eyeColor": "Azuis"
// }


console.log(person2);
person2.walk();

// saída:
// Person: {
//   "name": "Jon Doe",
//   "birthDate": "1980-08-05T00:00:00.000Z",
//   "eyeColor": "Pretos"
// }
// "Jon Doe está andando."

interface Employee {
  firstName: string;
  lastName: string;
  fullName(): string;
}

let employee: Employee = {
  firstName : "John",
  lastName: "Doe",
  fullName(): string {
      return this.firstName + " " + this.lastName; // usamos o "this" para acessar as propriedades da interface
  }
}

// employee.firstName = 10;  // Error: Type "number" is not assignable to type "string"

interface Teacher extends Employee {
  firstName: string;
  lastName: string;
  subject: string;
  fullName(): string;
  sayHello(): string;
}
// OBS: É necessário implementar o nome ads propriedades - firstName, lastName, fullname() -,
// apesar de terem sido trazidos pelo extends.

let teacher: Teacher = {
  firstName: "John",
  lastName: "Doe",
  subject: "Matemática",
  fullName(): string {
      return this.firstName + " " + this.lastName;
  },
  sayHello(): string {
      return `Olá, eu sou ${this.fullName()} e leciono ${this.subject}`;
  }
}

// -------------------------------------------------------- GENERICS
// COM O ANY --> errado
// function getArray(items : any[]) : any[] {
//   return new Array().concat(items);
// }

// let numberArray = getArray([5, 10, 15, 20]);
// let stringArray = getArray(["Cats", "Dogs", "Birds"]);
// numberArray.push(25);
// stringArray.push("Rabbits");
// numberArray.push("isto não é um número");
// stringArray.push(30);
// console.log(numberArray);
// // Saída:  [5, 10, 15, 20, 25, "isto não é um número"]
// console.log(stringArray);
// // Saída: ["Cats", "Dogs", "Birds", "Rabbits", 30]


// T pode ser coke coisa
function getArray<T>(items : T[]) : T[] {
  return new Array<T>().concat(items);
}

let numberArray = getArray<number>([5, 10, 15, 20]);
numberArray.push(25);
// numberArray.push("isto não é um número"); com any havia erro, com o generic (no caso <T>) não há
console.log(numberArray);
// Saída:  [5, 10, 15, 20, 25, "isto não é um número"]

let stringArray = getArray<string>(["Cats", "Dogs", "Birds"]);
stringArray.push("Rabbits");
// stringArray.push(30); com any havia erro, com o generic (no caso <T>) não há
console.log(stringArray);
// Saída: ["Cats", "Dogs", "Birds", "Rabbits", 30]

function identity<T, U> (value: T, message: U) : T {
  console.log(message);
  return value
}

let returnNumber = identity<number, string>(100, "Olá");
let returnString = identity<string, string>("100", "Mundo");
let returnBoolean = identity<boolean, string>(true, "Olá, Mundo!");

/*
                 --> GENERICS com INTERFACES
interface ProcessIdentity<T, U> {
  (value: T, message: U): T;
}

function processIdentity<T, U> (value: T, message: U) : T {
  console.log(message);
  return value
}

let processor: ProcessIdentity<number, string> = processIdentity;
let returnNum = processor(100, "Olá");
let returnStr = processor("Olá", 100); // Type check error: Argument of type "string" is not assignable to parameter of type "number".
*/

//                  --> GENERICS em CLASSES
interface ProcessIdentity<T, U> {
  _value: T;
  _message: U;

}
class ProcessIdentity<T, U> {
  constructor(value: T, message: U) {
      this._value = value;
      this._message = message;
  }
  getIdentity() : T {
      console.log(this._message);
      return this._value
  }
}

let processor = new ProcessIdentity<number, string>(100, "Olá");
processor.getIdentity();  // imprime "Olá" e retorna 100