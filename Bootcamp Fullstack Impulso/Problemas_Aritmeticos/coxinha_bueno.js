/**
 * Coxinha de Bueno
 *
 * Desafio:
 * - Em 2015 um novo record foi alcan�ado na competi��o de 
 * Coxinhas de Bueno de Andrada, onde M�nica mandou pra dentro 
 * 43 coxinhas em apenas 10 minutos, passando se antecessor que 
 * conseguiu comer, no mesmo tempo, 38 coxinhas em 2014.
 * 
 * - O restaurante especializado em coxinhas do pequeno distrito 
 * de Bueno de Andrada, interior de S�o Paulo, organiza essa competi��o 
 * todos os anos, mas nunca conseguiram entrar para o livro dos recordes, 
 * o Guinness Book. Para isso, o restaurante precisa preencher informa��es 
 * sobre a competi��o, como o n�mero de coxinhas consumidas pelos competidores 
 * durante o evento.
 * 
 * - Por�m, como j� foi informado, a especialidade deles � coxinha, n�o matem�tica, 
 * ent�o ser� que voc� pode ajud�-los? Com base no n�mero total de coxinhas consumidas 
 * e o n�mero de participantes na competi��o, o dono do restaurante precisa que voc� 
 * desenvolva um programa para saber a quantidade m�dia de coxinha que os participantes 
 * da competi��o conseguem devorar.
 * 
 * - Ah, lembre que, em troca da sua ajuda, voc� poder� comer quantas coxinhas conseguir.
 * 
 * Entrada:
 * - A entrada consiste de uma �nica linha que cont�m dois inteiros H e P (1 = H, P = 1000) 
 * indicando respectivamente o n�mero total de coxinhas consumidas e o n�mero total de 
 * participantes na competi��o.
 * 
 * Sa�da:
 * - Seu programa deve produzir uma �nica linha com um n�mero racional representando o n�mero 
 * m�dio de coxinhas consumidas pelos participantes. O resultado deve ser escrito como um n�mero 
 * racional com exatamente dois d�gitos ap�s o ponto decimal, arredondado se necess�rio.
 */

let line = gets().split(" ");

let H = parseInt(line[0]);
let P = parseInt(line[1]);

let media = (H/P).toFixed(2);

console.log(" " + media);