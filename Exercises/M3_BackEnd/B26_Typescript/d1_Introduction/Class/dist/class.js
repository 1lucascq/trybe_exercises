"use strict";
let yes = true; // cria uma variável de nome "yes" e diz que o tipo é boleano e o valor é true
let no = false; // cria uma variável de nome "no" e diz que o tipo é boleano e o valor é false
// cria uma variável de nome "x" e diz que o tipo é number mas não seta o valor
// isso não funciona com const
let x;
let y = 0;
let z = 123.456;
let s;
let empty = "";
let abc = 'abc';
function sayHelloWorld() {
    console.log("Hello World!");
}
let nullValue = null;
let undefinedValue = undefined;
//      --> enums
var StudentStatus;
(function (StudentStatus) {
    StudentStatus[StudentStatus["Active"] = 0] = "Active";
    StudentStatus[StudentStatus["Inactive"] = 1] = "Inactive";
    StudentStatus[StudentStatus["Paused"] = 2] = "Paused";
})(StudentStatus || (StudentStatus = {}));
let newStudentStatus = StudentStatus.Inactive; // referenciamos um enum usando EnumName.Value
console.log(newStudentStatus); //saída: 1
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["OK"] = 200] = "OK";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
    StatusCodes[StatusCodes["Unauthorized"] = 401] = "Unauthorized";
    StatusCodes[StatusCodes["PaymentRequired"] = 402] = "PaymentRequired";
    StatusCodes[StatusCodes["Forbidden"] = 403] = "Forbidden";
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
})(StatusCodes || (StatusCodes = {}));
const ok = StatusCodes.OK;
const indexOk = StatusCodes["OK"];
const stringBadRequest = StatusCodes[400];
console.log(ok); //saída: 200
console.log(indexOk); //saída: 200
console.log(stringBadRequest); //saída: BadRequest
