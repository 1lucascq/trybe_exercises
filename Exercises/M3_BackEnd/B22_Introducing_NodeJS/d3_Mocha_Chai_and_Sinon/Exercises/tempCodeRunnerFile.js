function checkNumbers(n) {
  if (n > 0) return 'positive';
  if (n === 0) return 'neutral';
  if (n < 0) return 'negative';
  return new Error('The function must be called with a NUMBER').message;
}
console.log(checkNumbers('s'))
