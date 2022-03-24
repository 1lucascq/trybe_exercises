"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("./utils"));
const lengthUnits = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
(0, utils_1.default)(lengthUnits);
// module.exports = lengthUnits;
exports.default = lengthUnits;
// const length = exec(lengthUnits)
// console.log(length)
// enum ValueType {
//   km = 0.001,
//   m = 1,
//   dm = 10,
//   cm = 100,
// }
// function convert (value: number, base: keyof typeof ValueType, convertTo: string) {
//   const baseToM: number = ValueType[base];
//   console.log(baseToM)
//   switch (convertTo) {
//     case 'km':
//       return value * baseToM
//     case 'm':
//       return      
//     case 'dm':
//       return      
//     case 'cm':
//       return      
//     default:
//       break;
//   }
// }
// console.log(convert(1000, 'cm', 'km'))
