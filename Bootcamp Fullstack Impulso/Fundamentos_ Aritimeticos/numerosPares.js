/**
 * Exibindo N�meros Pares
 * 
 * Desafio:
 * - Crie um programa que leia um n�mero e mostre os n�meros pares 
 * at� esse n�mero, inclusive ele mesmo.
 * 
 * Entrada:
 * - Voc� receber� 1 valor inteiro N, onde N > 0.
 * 
 * Sa�da:
 * - Exiba todos os n�meros pares at� o valor de entrada, sendo um 
 * em cada linha. 
 */

let numero = gets();

let par = 2;

while (par <= numero) {
  
  console.log(par);
  par += 2;

}