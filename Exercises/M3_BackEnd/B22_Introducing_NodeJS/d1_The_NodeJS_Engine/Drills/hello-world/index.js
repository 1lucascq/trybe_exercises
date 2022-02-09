const readline = require('readline-sync')

const name = readline.question('What\'s your name?');
const age = readline.questionInt('How old are you?');
const isOld = age > 28 ? 'getting older and your back probably hurts.' : 'too young, I envy you.';

console.log(`Hello, ${name}! You are ${isOld}`);

// console.log('hello-world');