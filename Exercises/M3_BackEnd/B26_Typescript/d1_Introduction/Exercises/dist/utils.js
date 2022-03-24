"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const values = readline_sync_1.default.question;
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
exports.default = convert;
