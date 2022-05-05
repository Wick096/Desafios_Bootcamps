/**
 * Menor e Posi��o
 *
 * Desafio:
 * - Desenvolva um c�digo que leia um valor E. Este E ser� o tamanho 
 * de um vetor X[E]. A seguir, leia cada um dos valores de X, encontre 
 * o menor elemento deste vetor e a sua posi��o dentro do vetor, 
 * mostrando esta informa��o.
 * 
 * Entrada:
 * - A primeira linha de entrada contem um �nico inteiro E (1 < E < 1000), 
 * indicando o n�mero de elementos que dever�o ser lidos em seguida para o 
 * vetor X[E] de inteiros. A segunda linha cont�m cada um dos E valores, 
 * separados por um espa�o.
 * 
 * Sa�da:
 * - A primeira linha apresenta a mensagem �Menor valor:� seguida de um 
 * espa�o e do menor valor lido na entrada. A segunda linha apresenta a 
 * mensagem �Posicao:� seguido de um espa�o e da posi��o do vetor na qual 
 * se encontra o menor valor lido, lembrando que o vetor inicia na posi��o 
 * zero.
 */

let qnt = parseInt(gets())
let entrada = gets()
let trimada = entrada.replace(/\s/g,',').trim().split(',');

var min = trimada[0]
var posicao = 0

for (let i = 1; i < qnt; i++) {

    if (parseFloat(min) > parseFloat(trimada[i])) {
    
        min = trimada[i]
        posicao = i
  
    }

}

console.log("Menor valor:", min)
console.log("Posicao:", posicao)