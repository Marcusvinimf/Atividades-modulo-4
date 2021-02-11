//A partir da variável abaixo e utilizando um método de array, retorne a raiz quadrada de todos os valores do array original em um novo array
var numbers = [4, 9, 16, 25];

let raizQuadrada = numbers.map(cada => Math.sqrt(cada));

console.log(raizQuadrada);

//A partir da variável abaixo e utilizando um método de array, multiplique todos os valores do array por 10. Utilize arrow function.
var numbers2 = [65, 44, 12, 4];

let multiplicaPor10 = numbers2.map(cada => cada*10);

console.log(multiplicaPor10);

//A partir da variável abaixo retorne um array com valores de ​age​ (idade) maiores ou iguais a 18 com arrow function e filter
var ages = [32, 33, 16, 40];

let compare = ages.filter(cada => cada >= 18);

console.log(compare);