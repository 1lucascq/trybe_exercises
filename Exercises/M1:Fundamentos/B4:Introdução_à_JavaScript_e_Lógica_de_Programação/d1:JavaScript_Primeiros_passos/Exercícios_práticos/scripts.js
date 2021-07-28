//1. Diga os comandos necessários para que seu programa rode as operações descritas:

const { EIDRM } = require("constants");

//A) Adição
let valor1A1 = 3;
let valor1A2 = 2;
console.log(valor1A1 + valor1A2)
//B) Subtração
let valor1B1 = 3;
let valor1B2 = 2;
console.log(valor1B1 - valor1B2)
//C) Multiplicação
let valor1C1 = 2;
let valor1C2 = 3;
console.log(valor1C1 * valor1C2)
//D) Divisão
let valor1D1 = 10;
let valor1D2 = 5;
console.log(valor1D1 / valor1D2)
//E) Módulo
let valor1E1 = 11;
let valor1E2 = 5;
console.log(valor1E1 % valor1E2)
//2. Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.
let valor2a = 3;
let valor2b = 4;
if (valor2a > valor2b) {
  console.log(valor2a + " é maior")
}
  else if (valor2b > valor2a){
    console.log(valor2b + " é maior")
  }
  else {
    console.log("valores iguais")
  }
//3. Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.
let valor3a = 5;
let valor3b = 8;
let valor3c = 4;
if (valor3a > valor3b && valor3a > valor3c) {
  console.log(valor3a + " é maior")
}
  else if (valor3b > valor3a && valor3b > valor3c){
    console.log(valor3b + " é maior")
  }
  else if (valor3c > valor3a && valor3c > valor3b){
    console.log(valor3c + " é maior")
  }
  else {
    console.log("valores iguais")
  }
//4. Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
let valor4 = 129.123;
if (valor4 > 0) {
  console.log("positive")
}
  else if (valor4 < 0) {
    console.log("negative")
  }
  else {
    console.log("zero")
  }
//5. Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo.
//Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário.
//Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
let valor5a = 100;
let valor5b = 30;
let valor5c = 5;
if (valor5a + valor5b + valor5c === 180) {
  console.log(true)
}
  else if (valor5a + valor5b + valor5c < 0) {
    console.log("Erro!!!")
  }
  else {
    console.log(false)
  }

//6. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
