/**
 * C?lculo da Viagem
 *
 * Desafio:
 * - Rubens quer calcular e mostrar a quantidade de litros de 
 * combust?vel gastos em uma viagem de carro, sendo que seu carro 
 * faz 12 KM/L. Como ele n?o sabe fazer um programa que o auxilie 
 * nessa miss?o, ele te pede ajuda. Para efetuar o c?lculo, deve-se 
 * fornecer o tempo gasto em horas na viagem e a velocidade m?dia 
 * durante a mesma em km/h. Assim, voc? conseguir? passar para Rubens 
 * qual a dist?ncia percorrida e, em seguida, calcular quantos litros 
 * ser?o necess?rios para a viagem que ele quer fazer. Mostre o valor 
 * com 3 casas decimais ap?s o ponto.
 * 
 * Entrada:
 * - O arquivo de entrada cont?m dois inteiros. O primeiro ? o tempo 
 * gasto na viagem em horas e o segundo ? a velocidade m?dia durante 
 * a mesma em km/h.
 * 
 * Sa?da:
 * - Imprima a quantidade de litros necess?ria para realizar a viagem, 
 * com tr?s d?gitos ap?s o ponto decimal
 */

let line = gets().split(" ");

let H = parseInt(line[0]);
let P = parseInt(line[1]);

let media = (H*P)/12;
let mediaFinal = media.toFixed(3);

console.log(" " + mediaFinal);