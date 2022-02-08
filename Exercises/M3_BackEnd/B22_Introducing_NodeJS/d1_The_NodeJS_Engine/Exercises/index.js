const readline = require('readline-sync');


const scripts = [
  { name: 'Car speed calculator', script: './carSpeed' },
  { name: 'IMC calculator', script: './imc' },
  { name: 'Prize draw', script: './prizeDraw' },
  { name: 'Calc factorial', script: './factorial' },
  { name: 'Calc fibonacci', script: './fibonacci' },
]
console.log(scripts[0]);

function startQuestion() {
  const options = [scripts[0].name, scripts[1].name, scripts[2].name];
  const answer = readline.keyInSelect(options, 'Which program do u want to see?');
  console.log(answer);
  require(scripts[answer].script);
}

startQuestion();