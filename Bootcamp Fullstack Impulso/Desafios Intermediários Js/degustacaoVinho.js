/*Desafio
Degusta��o de vinho �s escuras � a habilidade de identificar um vinho usando apenas seus sentidos do olfato e paladar.

Durante uma competi��o de degusta��o, uma garrafa de vinho � aberta e dividia em ta�as para que os cinco competidores possam provar. Eles podem cheiras, saborear e avaliar a bebida para conseguir identificar qual o tipo do vinho, sendo: (1) Cabernet; (2) Merlot; (3) Pinot Noir. No final, as respostas s�o verificadas para determinar o n�mero de suposi��es corretas.

Dado o qual foi o tipo do vinho e as respostas fornecidas, determine o n�mero de participantes que receberam a resposta correta.

Entrada
A primeira linha cont�m um inteiro T representando o tipo de vinho (1 = T = 4). A segunda linha cont�m cinco inteiros A, B, C, D e E, que indica a resposta dada por cada competidor (1 = A, B, C, D, E = 4).

Sa�da
A sa�da cont�m um inteiro representando o n�mero de concorrentes que obtiveram a resposta correta.
*/


let wineNumber = gets();
let wineTesters = gets().split(' ');
let correctAnswers = 0;

let correctAnswersList = wineTesters.filter(correctAnswers => correctAnswers.includes(wineNumber));
correctAnswers = correctAnswersList.length;

console.log(correctAnswers);