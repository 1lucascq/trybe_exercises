async function getResult () {
  try {
    const res = await doMath(randomNumbers)
    // console.log('res: ', res);
    return res;
  } catch (err) {
    console.log('err: ', err);
  }  
}
getResult()
