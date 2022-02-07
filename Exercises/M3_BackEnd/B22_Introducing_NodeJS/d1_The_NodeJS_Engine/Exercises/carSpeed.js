function avgSpeed(distance, speed) {
  const result = (distance / speed).toFixed(2);
  console.log('The car was going at ', result, 'm/s!');
}

const readline = require('readline-sync');
const d = readline.questionInt('How far the car is? (meters) ');
const s = readline.questionInt('How many seconds did it take to get there? ');

avgSpeed(d, s);