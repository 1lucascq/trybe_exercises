
//                                                    PROTECTED X PRIVATE
// class Superclass {
//   constructor(public isSuper: boolean = true) {}
//   protected sayHello() {
//     console.log('Hey, world!')
//   }
// }

// class Subclass extends Superclass {
//   sayHello2(): void {
//   this.sayHello()
//   }
// }

// function testFunction(superClass: Subclass) {
//   superClass.sayHello2() // .sayHello dá erro pq tá protected e só pode ser acessado dentro da func
// }

// const sup = new Superclass();
// const sub = new Subclass();

// // testFunction(sup);
// // testFunction(sub);

//                                                            SUPER
class Superclass {
  constructor(public isSuper: boolean = true) {}
  public sayHello() {
    console.log('Hey, world!')
  }
}

class Subclass extends Superclass {
  constructor(isSuper = false) {
    super()
  }
}

function testFunction(superClass: Subclass) {
  superClass.sayHello()
}

const sup = new Superclass();
const sub = new Subclass();

testFunction(sup);
testFunction(sub);
