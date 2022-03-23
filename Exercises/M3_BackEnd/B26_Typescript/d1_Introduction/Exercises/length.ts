import convert from "./utils";

// Course:
const units = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm']

const length = convert(1000, 'cm', 'km', units)
console.log(length)