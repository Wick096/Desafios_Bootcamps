/**
 * Soma Simples
 *
 * Desafio:
 * - Leia dois valores inteiros identificados como vari?veis A e B. 
 * - Calcule a soma entre elas e chame essa vari?vel de SOMA. 
 * - A seguir escreva o valor desta vari?vel.
 * 
 * Entrada:
 * - O arquivo de entrada cont?m 2 valores inteiros.
 * 
 * Sa?da:
 * - Imprima a vari?vel SOMA com todas as letras mai?sculas, 
 * inserindo um espa?o em branco antes e depois do s?mbolo de 
 * igualdade, seguido pelo valor correspondente ? soma de A e B.
 */

var A = parseInt(gets());
var B = parseInt(gets());

let soma = (A + B);

console.log("SOMA = " + soma);