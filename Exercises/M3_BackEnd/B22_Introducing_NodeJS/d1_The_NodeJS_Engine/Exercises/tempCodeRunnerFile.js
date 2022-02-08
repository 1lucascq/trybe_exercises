const scripts = [
  { name: 'Calcular velocidade do carro', script: require('./carSpeed') },
  { name: 'Calcular IMC', script: require('./imc') },
  { name: 'Sorteio', script: require('./prizeDraw') },
]
console.log(scripts[0]);
