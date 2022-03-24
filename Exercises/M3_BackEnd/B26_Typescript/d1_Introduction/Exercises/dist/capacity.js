"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("./utils"));
const capacityUnits = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];
const capacity = (0, utils_1.default)(1000, 'g', 'kg', capacityUnits);
console.log(capacity);
