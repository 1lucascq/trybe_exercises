// 3. A função hydrate recebe uma string no formato "numero bebida", e retorna a sugestão de quantos copos de água você deve beber para se hidratar. Para cada bebida, deve-se tomar um copo de água para não ter ressaca.

const hydrate = (string) => {
  const waterCups = string
    .split("")
    .reduce((acc, n) => acc + (Number(n) || n === 0), 0);
  if (waterCups === 1) return `${waterCups} copo de água`
  return `${waterCups} copos de água`
}

module.exports = hydrate;
