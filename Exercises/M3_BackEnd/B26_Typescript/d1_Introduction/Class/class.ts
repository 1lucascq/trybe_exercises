let yes: boolean = true; // cria uma variável de nome "yes" e diz que o tipo é boleano e o valor é true
let no: boolean = false; // cria uma variável de nome "no" e diz que o tipo é boleano e o valor é false

// cria uma variável de nome "x" e diz que o tipo é number mas não seta o valor
// isso não funciona com const
let x: number;
let y: number = 0;
let z: number = 123.456;

let s: string;
let empty: string = "";
let abc: string = 'abc';

function sayHelloWorld(): void {
  console.log("Hello World!");
}

let nullValue: null = null;
let undefinedValue = undefined;

//      --> enums
enum StudentStatus {
  Active,
  Inactive,
  Paused
}

let newStudentStatus: StudentStatus = StudentStatus.Inactive; // referenciamos um enum usando EnumName.Value
console.log(newStudentStatus); //saída: 1

enum StatusCodes {
  OK = 200,
  BadRequest = 400,
  Unauthorized,
  PaymentRequired,
  Forbidden,
  NotFound,
}

const ok = StatusCodes.OK;
const indexOk = StatusCodes["OK"];
const stringBadRequest = StatusCodes[400];

console.log(ok); //saída: 200
console.log(indexOk); //saída: 200
console.log(stringBadRequest); //saída: BadRequest