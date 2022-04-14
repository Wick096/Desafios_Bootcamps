/**
 * Quantidade de N�meros Positivos
 * 
 * Desafio:
 * - Crie um programa que leia 6 valores. Voc� poder� receber valores negativos 
 * e/ou positivos como entrada, devendo desconsiderar os valores nulos. Em seguida, 
 * apresente a quantidade de valores positivos digitados.
 * 
 * Entrada:
 * - Voc� receber� seis valores, negativos e/ou positivos.
 * 
 * Sa�da:
 * - Exiba uma mensagem dizendo quantos valores positivos foram lidos assim como � 
 * exibido abaixo no exemplo de sa�da. N�o esque�a da mensagem "valores positivos" ao final.
 */

numero = Array(6);

numero[0] = gets();
numero[1] = gets();
numero[2] = gets();
numero[3] = gets();
numero[4] = gets();
numero[5] = gets();

positivos = numero.filter(value => value > 0);

console.log(positivos.length + " valores positivos");