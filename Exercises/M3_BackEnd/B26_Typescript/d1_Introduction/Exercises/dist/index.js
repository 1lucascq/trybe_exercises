"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
// import capacityUnits from './capacity';
const length_1 = __importDefault(require("./length"));
// import massUnits from './mass';
// import exec from './utils';
console.log(length_1.default);
var DataType;
(function (DataType) {
    DataType[DataType["length"] = 0] = "length";
    DataType[DataType["mass"] = 1] = "mass";
    DataType[DataType["capacity"] = 2] = "capacity";
})(DataType || (DataType = {}));
;
const types = ['length', 'mass', 'capacity'];
// const typesArr: string[][] = [lengthUnits, massUnits, capacityUnits]
const selectedType = readline_sync_1.default.keyInSelect(types, 'Escolha o tipo de conversão: ', { cancel: "SAIR" });
// console.log(typesArr)
console.log(selectedType);
// exec(typesArr[selectedType])
