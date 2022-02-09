function getFactorial(n) {

      
  // --------> peguei do Course.
  // Se n for 0 ou 1
  return [0, 1].includes(n)
  // Retornamos 1
  ? 1
  // Caso contrário, continuamos o cálculo do fatorial multiplicando n pelo fatorial de n - 1
  : n * getFactorial(n - 1); // Uma função que chama a si mesma é chamada de função *RECURSIVA*
  
  console.log(`x: ${x}`);
  
  const resultado = getFactorial(x);
  
  console.log(`Resultado: ${resultado}`);
}

console.log(getFactorial(5))