/**
 * Quantidade de N�meros Positivos
 * 
 * Desafio:
 * - Voc� deve fazer a leitura de 5 valores inteiros. 
 * - Em seguida mostre quantos valores informados s�o pares, 
 * quantos valores informados s�o �mpares, quantos valores 
 * informados s�o positivos e quantos valores informados 
 * s�o negativos.
 * 
 * Entrada:
 * - Voc� receber� 5 valores inteiros.
 * 
 * Sa�da:
 * - Exiba a mensagem conforme o exemplo de sa�da abaixo, 
 * sendo uma mensagem por linha e n�o esquecendo o final 
 * de linha ap�s cada uma.
 */

numero = Array(5);

numero[0] = gets();
numero[1] = gets();
numero[2] = gets();
numero[3] = gets();
numero[4] = gets();

pares = numero.filter(value => value % 2 == 0);
impares = numero.filter(value => value % 2 != 0);

positivos = numero.filter(value => value > 0);
negativos = numero.filter(value => value < 0);

console.log(pares.length + " valor(es) par(es)");
console.log(impares.length + " valor(es) impar(es)");

console.log(positivos.length + " valor(es) positivo(s)");
console.log(negativos.length + " valor(es) negativo(s)");