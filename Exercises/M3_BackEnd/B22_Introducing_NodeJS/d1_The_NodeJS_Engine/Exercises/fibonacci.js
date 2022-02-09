const readline = require('readline-sync');
// -------> Source: https://app.betrybe.com/course/back-end/introducao-ao-desenvolvimento-web-com-nodejs/nodejs-introducao-gabarito/solutions/1d93757c-274c-4d89-8950-4fe1415ce425/exercicios/3f93cf72-e9ac-4f54-9824-d4d864458a6b?use_case=calendar
function calculaElemento (quantity) {
  // a armazena o último número que calculamos
  let a = 1;
  // b armazena o penúltimo número que calculamos
  let b = 1;

  // Repetimos o loop enquanto `n` for maior ou igual a 0
  for (let n = quantity; n >= 0; n--) {
    if (b) console.log(b);
    // Armazenamos o último valor calculado em uma variável temporária
    const temp = a;
    // Para calcular o novo valor, somamos o último valor com o penúltimo valor
    // O novo valor é armazenado em `a`, já que ele passa a ser o último valor calculado
    a = a + b;
    // O valor antigo de `a`, que estava armazenado na variável temporária
    // agora se torna o penúltimo número e, por isso, é armazenado em `b`
    b = temp;
  }

  console.log(b);
  return b;
}

function realizaCalculo() {
  const n = readline.questionInt('Digite o valor de n: ');

  if (n <= 0) {
    console.log('Digite um número maior que 0!')
    return;
  }

  console.log(`n: ${n}`);

  calculaElemento(n - 2);
}

realizaCalculo();