interface MyInterface {
  myNumber: number;
  myFunc(myParam: number): string;
}

class myClass implements MyInterface {
  constructor(public myNumber: number) {}
  myFunc(myParam: number): string {
    return `sum is: ${this.myNumber + myParam}`;
  }
}

const myInstance = new myClass(6);
myInstance.myNumber;
myInstance.myFunc(0);
