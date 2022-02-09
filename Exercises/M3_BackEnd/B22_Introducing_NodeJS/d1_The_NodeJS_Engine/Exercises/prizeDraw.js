const readline = require('readline-sync');

function playAgain(){
  const pAgain = ['Yes', 'No'];
  const pAgainAnswer = readline.keyInSelect(pAgain, 'Play again? ');
  if(pAgainAnswer === 0){
    return doDraw();
  } else {
    return ('See you!')
  }
}

function doDraw() {
  const min = Math.ceil(0);
  const max = Math.floor(10);
  const draw = Math.floor(Math.random() * (max - min + 1)) + min
  
  const n = readline.questionInt('Guess a number up to 10? ');
  if(draw === n) {
    console.log('-----------> CONGRATULATIONS, YOU EARN NOTHING BUT YOU\'RE LUCKY TODAY! <-------------')
  } else {
    console.log(`--> Better luck next time! The number was ${draw}`)
  }
  playAgain()
}

  doDraw();

module.exports = doDraw;