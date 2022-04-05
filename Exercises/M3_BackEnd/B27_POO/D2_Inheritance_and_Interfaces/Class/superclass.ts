// Para fixar:
// Que tal exercitar a sintaxe um pouco, com um breve exercício bem simples? Juro que parece muita coisa, mas não é!
// Crie uma classe chamada Superclass .
// A Superclass deve possuir um atributo público isSuper
// isSuper deve ser setado como true na inicialização.
// A Superclass deve possuir um método público chamado sayHello , que deve imprimir um "Olá mundo!".
// Crie uma classe chamada Subclass que herda da Superclass .
// Crie uma função fora do escopo da Subclass que recebe um objeto da Superclass .
// Dentro da função, chame o método sayHello do objeto passado como parâmetro.
// Crie um objeto da Superclass e outro da Subclass .
// Chame a função 2 vezes, passando os objetos criados.
// Vamos agora a alguns tópicos um pouco mais avançados, atributos protegidos e o uso do super .|

class Superclass {
  constructor(public isSuper: boolean = true) {}
  public sayHello() {
    console.log('Hey, world!')
  }
}

class Subclass extends Superclass {

}

function testFunction(superClass: Superclass) {
  superClass.sayHello()
}

const sup = new Superclass();
const sub = new Subclass();

testFunction(sup);
testFunction(sub);
