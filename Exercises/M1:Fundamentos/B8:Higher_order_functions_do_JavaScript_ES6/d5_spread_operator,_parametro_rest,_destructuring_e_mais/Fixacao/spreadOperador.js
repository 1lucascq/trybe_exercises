const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];

console.log(imc(...patientInfo));


// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Tomate', 'Maça', 'Uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Coxinha', 'Pastel', 'Dogão'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));