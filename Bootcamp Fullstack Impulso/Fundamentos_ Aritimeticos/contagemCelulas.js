/**
 * Contagem de C�dulas
 * 
 * Desafio:
 * - Fa�a a leitura de um valor inteiro. Em seguida, 
 * calcule o menor n�mero de notas poss�veis (c�dulas) 
 * onde o valor pode ser decomposto. As notas que voc� 
 * deve considerar s�o de 100, 50, 20, 10, 5, 2 e 1. 
 * 
 * - Na sequ�ncia mostre o valor lido e a rela��o de notas 
 * necess�rias.
 * 
 * Entrada:
 * - Voc� receber� um valor inteiro N (0 < N < 1000000).
 * 
 * Sa�da:
 * - Exiba o valor lido e a quantidade m�nima de notas de 
 * cada tipo necess�rias, seguindo o exemplo de sa�da abaixo. 
 * Ap�s cada linha deve ser imprimido o fim de linha.
 */

let notas = [100, 50, 20, 10, 5, 2, 1];
let nnotas = [0, 0, 0, 0, 0, 0, 0];

let quantia = parseInt(gets());

let resto = quantia;

while (resto >= 1) {
  
  nota = notas.findIndex(value => value <= resto);
  nnotas[nota] = Math.trunc(resto / notas[nota]);
  resto = resto % notas[nota];

}

console.log(quantia);
console.log(nnotas[0] + " nota(s) de R$ 100,00");
console.log(nnotas[1] + " nota(s) de R$ 50,00");
console.log(nnotas[2] + " nota(s) de R$ 20,00");
console.log(nnotas[3] + " nota(s) de R$ 10,00");
console.log(nnotas[4] + " nota(s) de R$ 5,00");
console.log(nnotas[5] + " nota(s) de R$ 2,00");
console.log(nnotas[6] + " nota(s) de R$ 1,00");