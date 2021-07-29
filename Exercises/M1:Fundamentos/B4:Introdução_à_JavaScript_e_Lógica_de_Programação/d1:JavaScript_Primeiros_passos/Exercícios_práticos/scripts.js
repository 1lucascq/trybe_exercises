const { EIDRM } = require("constants");
//1. Diga os comandos necessários para que seu programa rode as operações descritas:
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
let valor6 = "PeÃO";
if (valor6.toLowerCase(valor6) === "rainha") {
  console.log("Rainha: todos os lados quaisquer número de casas")
}
  else if (valor6.toLowerCase(valor6) === "rei") {
    console.log("Rei: uma casa para qualquer lado")
  }  
  else if (valor6.toLowerCase(valor6) === "peão") {
    console.log("Peão: uma casa para frente")
  }
  else if (valor6.toLowerCase(valor6) === "cavalo") {
    console.log("Cavalo: movimento em L, sendo 3 casas para um lado e 2 para o outro")
  }
  else if (valor6.toLowerCase(valor6) === "bispo") {
    console.log("Bispo: quaisquer número de casas na diagonal")
  }
  else if (valor6.toLowerCase(valor6) === "torre") {
    console.log("Torre: quaisquer número de casas em linha horizontal ou vertical")
  }
else {
    console.log("Verifique a palavra digitada")
}
 
//7. Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F.
let valor7 = 99;
if (valor7 < 0 || valor7 > 100) {
  console.log("Confira a nota!!!");
} 
  else if (valor7 >= 90) {
  console.log("A");
  } 
  else if (valor7 >= 80) {
  console.log("B");
  } 
  else if (valor7 >= 70) {
  console.log("C");
  } 
  else if (valor7 >= 60) {
  console.log("D");
  } 
  else if (valor7 >= 50) {
  console.log("E");
  } 
else {
  console.log("F");
}
//8. Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for par.
//Caso contrário, ele retorna false.
let valor8a = 15;
let valor8b = 12;
let valor8c = 13;
if (valor8a % 2 === 0 || valor8b % 2 === 0 || valor8c % 2 === 0) {
  console.log("Pelo menos um número é par");
}
else {
    console.log("Todos os números são ímpares");
}
//9. Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar.
//Caso contrário, ele retorna false.
let valor9a = 4;
let valor9b = 6;
let valor9c = 2;
if (valor9a % 2 != 0 || valor9b % 2 != 0 || valor9c % 2 != 0) {
  console.log("Pelo menos um número é impar");
}
else {
    console.log("Todos os números são pares");
}

//10. Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu
//valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a 
//empresa terá ao vender mil desses produtos.
let valor10a = 10;
let valor10b = 15;
let valor10c;
if (valor10c = valor10b * 1000 - valor10a * 1000) {
  console.log(valor10c + " é o lucro obtido com as vendas")
}

//11. Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR.
//Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
let salario = 12000.0;
let aliquotaINSS;
let aliquotaIR;
let deducaoIR;
let salarioBase;
let salarioLiquido;
let valorIR;

if (salario >= 1556.95 && salario <= 2594.92) {
  aliquotaINSS = 0.09;
} else if (salario > 2594.92 && salario <= 5189.82) {
  aliquotaINSS = 0.11;
} else if (salario < 1556.95) {
  aliquotaINSS = 0.08; 
} else if (salario > 5189.82) {
  aliquotaINSS = 570.08;
} 

// Salário base
if (salario > 5189.82) {
  salarioBase = salario - aliquotaINSS;
} else {
  salarioBase = salario - (salario * aliquotaINSS);
}

// Alíquota IR
if (salarioBase < 1903.98) {
  aliquotaIR = 0;
} 
  else if (salarioBase > 1903.98 && salarioBase <= 2826.65) {
    aliquotaIR = 0.075;
  } 
  else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    aliquotaIR = 0.15;
  
  } 
  else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    aliquotaIR = 0.225;
  
  } 
else {
    aliquotaIR = 0.275;
}

if (salarioBase < 1903.98) {
  deducaoIR = 0;
} 
  else if (salarioBase > 1903.98 && salarioBase <= 2826.65) {
    deducaoIR = 142.8;
  } 
  else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    deducaoIR = 354.8;
  
  } 
  else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    deducaoIR = 636.13;
  
  } 
else {
    deducaoIR = 869.36;
}

valorIR = (salarioBase * aliquotaIR) - deducaoIR;
salarioLiquido = salarioBase - valorIR;

console.log(salarioLiquido)