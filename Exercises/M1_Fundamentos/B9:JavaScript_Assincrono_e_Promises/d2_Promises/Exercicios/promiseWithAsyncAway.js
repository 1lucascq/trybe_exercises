const sumRandomNumbers = () => {
  const myArray = Array.from(
    { length: 10 },
    () => Math.floor(Math.random() * 50) + 1
  );
  const sum = myArray.map(number => number * number)
    .reduce((number, acc) => number + acc, 0);

  console.log('Sum é:', sum)
  if (sum >= 9000) {
    throw new Error('testesteste');
  }
  return sum;
}

const sumArrayFromSum = (sum) => [2, 3, 5, 10].map(number => sum / number)
  .reduce((acc, number) => acc + number);

const fetchPromise = async () => {
  try {
    const sum = await sumRandomNumbers();
    console.log(sum)
    const sumFromSum = await sumArrayFromSum(sum);
    console.log(`o resultado foi: ${Math.round(sumFromSum)}`);
  } catch (error) {
    console.log(`Vegeta, this promise must be broken, the value IT'S OVER NINE THOUSAAAAAAAND!!!!!!1!`);
  }
}

fetchPromise();
