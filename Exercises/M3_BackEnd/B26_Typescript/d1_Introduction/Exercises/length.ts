import exec from "./utils"

export const lengthUnits = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
// exec(lengthUnits);

// module.exports = lengthUnits;

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