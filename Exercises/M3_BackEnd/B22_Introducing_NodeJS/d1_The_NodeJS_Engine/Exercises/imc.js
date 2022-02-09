const readline = require('readline-sync');

const w = readline.questionFloat('How much do you weight? ')
const h = readline.questionFloat('What is your height (in meters)? ')

function calcIMC(height, weight) {
  const imc = weight/Math.pow(height, 2).toFixed(2);
  console.log('Altura: ', h);
  console.log('Peso: ', w);
  console.log('IMC: ', imc);
  if(imc < 18.5) {
    console.log('Você está ABAIXO DO PESO');
  } else if(imc >= 18,5 && imc < 25) {
    console.log('Você está com o PESO NORMAL');
  } else if(imc >= 25 && imc < 30) {
    console.log('Você está com SOBREPESO');
  } else if(imc >= 30 && imc < 35) {
    console.log('Você está com OBESIDADE I');
  } else if(imc >= 35 && imc < 40) {
    console.log('Você está com OBESIDADE II');
  } else if(imc >= 40) {
    console.log('Você está com OBESIDADE III ou IV');
  }

}
calcIMC(h, w);

module.exports = calcIMC;
