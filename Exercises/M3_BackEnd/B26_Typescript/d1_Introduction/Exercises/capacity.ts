import convert from "./utils"

const capacityUnits = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml']

const capacity = convert(1000, 'g', 'kg', capacityUnits)
console.log(capacity)