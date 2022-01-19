function techList (arr, name) {
  if (arr.length === 0) return 'Vazio!';
  
  const result = arr.sort()
  .map(tech => ({ tech, name }));
  
  return result;
}

module.exports = techList;

//              --> Primeira solução - antes de refatorar:
// function techList (arr, name) {
//   if (arr.length === 0) return 'Vazio!';
  
//   const result = [];
//   arr.forEach(tech => {
//     result.push({ tech, name })
//   });
//   result.sort((a,b) => {
//     return a.tech < b.tech ? -1 : a.tech > b.tech ? 1 : 0;     ---> sort para objetos de forma prática
//   });
  
// return result;
// }