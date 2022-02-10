function getRandomNumber(){
  return Math.floor(Math.random() * 100 + 1)
}
const randomNumbers = Array.from({ length: 3 }).map(getRandomNumber)

function doMath(a, b, c) {
  return new Promise((resolve, reject) => {
    if(typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') reject('Params must be numbers!');

    const result = (a + b) * c;

    if(result < 2000) reject('The result is too low!');
    
    resolve(`The result is: ${result}`);
  })
}

//            -->   .then/.catch

// doMath(...randomNumbers)
//   .then((result) => console.log('result: ', result))
//   .catch((error) => console.log('error: ', error));

//            -->   await/async

async function getResult () {
  try {
    const res = await doMath(...randomNumbers)
    console.log('res: ', res);
    return res;
  } catch (err) {
    console.log('err: ', err);
  }  
}
getResult()
