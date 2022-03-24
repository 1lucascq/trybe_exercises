"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rectangle = exports.square = exports.triangle = exports.sumArray = exports.personAge = exports.greeter = void 0;
function greeter(name) {
    return `Olá ${name}!`;
}
exports.greeter = greeter;
function personAge(name, age) {
    return `${name} tem ${age} anos!`;
}
exports.personAge = personAge;
// Usei direto no reducer para relembrar
// export function add(totalAccumulator: number, item: number): number {
//   return totalAccumulator + item;
// }
function sumArray(numbers) {
    return numbers.reduce((accumulator, item) => {
        return accumulator + item;
    }, 0);
}
exports.sumArray = sumArray;
const people = [
    { name: 'ze', age: 20 },
    { name: 'jao', age: 20 },
    { name: 'ana', age: 22 },
    { name: 'lau', age: 22 }
];
people.reduce((groupOfPeople, person) => {
    const age = person.age;
    if (!groupOfPeople[age])
        groupOfPeople = [];
    groupOfPeople.push(person);
    return groupOfPeople;
}, {});
function triangle(base, height) {
    return (base * height) / 2;
}
exports.triangle = triangle;
function square(side) {
    return side ** 2;
}
exports.square = square;
function rectangle(base, height) {
    return base * height;
}
exports.rectangle = rectangle;
