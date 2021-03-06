/*Desafio
Voc? deve calcular o consumo m?dio de um autom?vel onde ser? informada a dist?ncia total percorrida (em Km) e o total de combust?vel consumido (em litros).

Entrada
Voc? receber? dois valores: um valor inteiro X com a dist?ncia total percorrida (em Km), e um valor real Y que representa o total de combust?vel consumido, com um d?gito ap?s o ponto decimal.

Sa?da
Exiba o valor que representa o consumo m?dio do autom?vel (3 casas ap?s a v?rgula), incluindo no final a mensagem "km/l".
*/

let X = parseInt(gets());
let Y = parseFloat(gets());
let consumoMedio = parseFloat(X / Y).toFixed(3);

console.log(consumoMedio + " km/l");