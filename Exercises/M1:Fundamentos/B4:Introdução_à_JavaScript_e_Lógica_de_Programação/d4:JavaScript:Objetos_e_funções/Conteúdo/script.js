//          OBJETOS
console.log('Exercícios de fixação sobre Objetos:')
//1 - Crie um objeto player contendo as variáveis listadas abaixo.

let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: { golden: 2, silver: 3 },
  bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
}

//2 - Acesse as chaves name , lastName e age e concatene as suas informações para imprimir no console
//uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.')

//3 - Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em
//que a jogadora Marta foi considerada a melhor do mundo.

//4 - Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva
//foi eleita a melhor do mundo por 6 vezes".

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' +
player.bestInTheWorld.length + ' vezes.')

//5 - Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de
//ouro e 3 medalhas de prata".

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' possui ' + player.medals.golden +
' medalhas de ouro ' + 'e ' + player.medals.silver + ' medalhas de prata.')

//          FOR/IN
console.log('Exercícios de fixação sobre For/In:')
//1 - Usando o objeto abaixo, utilize For/in e imprima no console a mensagem 'Olá xxxxx' para cada nome,
//substituindo o xxxxx pelo nome em questão.


let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge' 
};
for (let i in names)

console.log('Olá, ' + names[i])

//2 - Usando o objeto abaixo, utilize For/in e imprima um console.log com as chaves e valores desse objeto.

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (let i in car)
console.log(i, car[i])


//          FUNÇÕES
console.log('Exercícios de fixação sobre Funções:')
//1 - Pegue cada um dos exercícios da primeira parte das nossas aulas de JavaScript e faça com que todos eles
//sejam funções de um mesmo arquivo. As variáveis que você define no começo de cada arquivo devem ser
//removidas e transformadas em parâmetros das funções.

function soma (a,b) {
  return a + b
}
console.log(soma (1,3))

function subtracao (a,b) {
  return a - b
}
console.log(subtracao (1,3))

function multiplicacao (a,b) {
  return a * b
}
console.log(multiplicacao (2,3))

function divisao (a,b) {
  return a / b
}
console.log(divisao (32,2))

function modulo (a,b) {
  return a % b
}
console.log(modulo (5,2))

function maiorValor (a,b) {
  if (a > b) {
    return a + " é maior"
  }
    else if (b > a){
      return b + " é maior"
    }
  else {
      return "valores iguais"
  } 
}
console.log(maiorValor (5,2))

function maiorValorDe3 (a,b,c) {
  if (a > b && a > c) {
    return (a + " é maior")
  }
    else if (b > a && b > c){
      return (b + " é maior")
    }
    else if (c > a && c > b){
      return (c + " é maior")
    }
  else {
      return ("valores iguais")
  }
}
console.log(maiorValorDe3 (2,5,29))

function ehPositivo(a) {
  if (a > 0) {
    return ("positive")
  }
    else if (a < 0) {
      return ("negative")
    }
  else {
      return ("zero")
  }
}
console.log(ehPositivo (-5))

function ehTriangulo (a,b,c) {
  if (a + b + c === 180) {
    return (true)
  }
    else if (a + b + c < 0) {
      return ("Erro!!!")
    }
  else {
      return (false)
  } 
}
console.log(ehTriangulo (20, 100, 60))

function pecaXadrez (a){
if (a.toLowerCase(a) === "rainha") {
  return ("Rainha: todos os lados quaisquer número de casas")
}
  else if (a.toLowerCase(a) === "rei") {
    return ("Rei: uma casa para qualquer lado")
  }  
  else if (a.toLowerCase(a) === "peão") {
    return ("Peão: uma casa para frente")
  }
  else if (a.toLowerCase(a) === "cavalo") {
    return ("Cavalo: movimento em L, sendo 3 casas para um lado e 2 para o outro")
  }
  else if (a.toLowerCase(a) === "bispo") {
    return ("Bispo: quaisquer número de casas na diagonal")
  }
  else if (a.toLowerCase(a) === "torre") {
    return ("Torre: quaisquer número de casas em linha horizontal ou vertical")
  }
else {
    return ("Verifique a palavra digitada")
  }
}
console.log(pecaXadrez('Peão'))

function conceitoNota (a) {
  if (a < 0 || a > 100) {
    return ("Confira a nota!!!");
  } 
    else if (a >= 90) {
    return ("A");
    } 
    else if (a >= 80) {
    return ("B");
    } 
    else if (a >= 70) {
    return ("C");
    } 
    else if (a >= 60) {
    return ("D");
    } 
    else if (a >= 50) {
    return ("E");
    } 
  else {
    return ("F");
  }
}
console.log(conceitoNota (89))

function aoMenos1EhPar (a,b,c) {
  if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
    return ("Pelo menos um número é par");
  }
  else {
      return ("Todos os números são ímpares");
  }
}
console.log(aoMenos1EhPar (89,-1,2))

function aoMenos1EhImpar (a,b,c) {
  if (a % 2 != 0 || b % 2 != 0 || c % 2 != 0) {
    return ("Pelo menos um número é impar");
  }
  else {
      return ("Todos os números são pares");
  }
  
}
console.log(aoMenos1EhImpar (2,6,20))

function lucro (a,b) {
  let lucro = 0;
  if (lucro = b * 1000 - a * 1000) {
    return (lucro + " é o lucro obtido com as vendas")
  }
}
console.log(lucro (10, 20))

function salarioLiquido (a) {
let aliquotaINSS;
let aliquotaIR;
let deducaoIR;
let salarioBase;
let salarioLiquido;
let valorIR;

if (a >= 1556.95 && a <= 2594.92) {
  aliquotaINSS = 0.09;
} else if (a > 2594.92 && a <= 5189.82) {
  aliquotaINSS = 0.11;
} else if (a < 1556.95) {
  aliquotaINSS = 0.08; 
} else if (a > 5189.82) {
  aliquotaINSS = 570.08;
} 

// Salário base
if (a > 5189.82) {
  salarioBase = a - aliquotaINSS;
} else {
  salarioBase = a - (a * aliquotaINSS);
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

return (salarioLiquido)
}
console.log(salarioLiquido(12000))