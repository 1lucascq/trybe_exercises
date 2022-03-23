import convert from "./utils"

const weightUnits = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg']

const weight = convert(1000, 'g', 'kg', weightUnits)
console.log(weight)