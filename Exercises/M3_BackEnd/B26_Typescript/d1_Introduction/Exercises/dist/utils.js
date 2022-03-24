"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
function throwError(unity) {
    throw new Error(`${unity} não é um valor válido.`);
}
function convert(value, base, convertTo, units) {
    if (!units.includes(base))
        throwError(base);
    if (!units.includes(convertTo))
        throwError(convertTo);
    const forIndex = units.indexOf(base);
    const toIndex = units.indexOf(convertTo);
    const exponent = (toIndex - forIndex);
    return value * Math.pow(10, exponent);
}
function exec(units) {
    const value = readline_sync_1.default.questionFloat('Digite o valor que deseja converter: ');
    const baseNum = readline_sync_1.default.keyInSelect(units, 'Digite o formato que deseja converter: ');
    const convertToNum = readline_sync_1.default.keyInSelect(units, 'Digite o formato para o qual deseja converter: ');
    if (convertToNum < 0)
        return 'vlw flw';
    const base = units[baseNum];
    const convertTo = units[convertToNum];
    const result = `${value}${base} === ${convert(value, base, convertTo, units)}${convertTo}}`;
    console.log(result);
    return result;
}
exports.default = exec;
