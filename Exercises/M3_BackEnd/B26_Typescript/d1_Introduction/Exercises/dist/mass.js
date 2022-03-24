"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("./utils"));
const weightUnits = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];
const weight = (0, utils_1.default)(1000, 'g', 'kg', weightUnits);
console.log(weight);
