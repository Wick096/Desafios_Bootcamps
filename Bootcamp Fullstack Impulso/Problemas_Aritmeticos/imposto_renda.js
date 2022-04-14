/**
 * Imposto de Renda
 *
 * Desafio:
 * - H� um pa�s denominado Lilipute, todos os habitantes ficam 
 * felizes em pagar seus impostos, pois sabem que nele n�o existem 
 * pol�ticos corruptos e os recursos arrecadados s�o utilizados em 
 * benef�cio da popula��o, sem qualquer desvio. A moeda deste pa�s 
 * � o Libs, cujo s�mbolo � o R$.
 * 
 * - Voc� ter� desafio de ler um valor com duas casas decimais, 
 * equivalente ao sal�rio de uma pessoa de Libs. Em seguida, calcule 
 * e mostre o valor que esta pessoa deve pagar de Imposto de Renda, 
 * segundo a tabela abaixo.
 * 
 * - Renda
 * de 0.00 a R$ 2000.00
 * de R$ 2000.01 at� R$ 3000.00
 * de R$ 3000.01 at� R$ 4500.00
 * acima de R$ 4500.00
 * 
 * - Lembre que, se o sal�rio for R$ 3002.00, a taxa que incide � de 
 * 8% apenas sobre R$ 1000.00, pois a faixa de sal�rio que fica de 
 * R$ 0.00 at� R$ 2000.00 � isenta de Imposto de Renda. No exemplo 
 * fornecido (abaixo), a taxa � de 8% sobre R$ 1000.00 + 18% sobre 
 * R$ 2.00, o que resulta em R$ 80.36 no total. O valor deve ser 
 * impresso com duas casas decimais. 
 * 
 * Entrada:
 * - A entrada cont�m apenas um valor de ponto flutuante, com duas 
 * casas decimais.
 * 
 * Sa�da:
 * - Imprima o texto "R$" seguido de um espa�o e do valor total 
 * devido de Imposto de Renda, com duas casas ap�s o ponto. Se o 
 * valor de entrada for menor ou igual a 2000, dever� ser impressa 
 * a mensagem "Isento".
 */

let calc = gets();
calc = parseFloat(calc);

if (calc <= 2000) {

  console.log('Isento');

} else if (calc <= 3000) {

  segundaFaixa = (calc - 2000) * 0.08;

  result = parseFloat(segundaFaixa);
  result = result.toFixed(2);

  console.log('R$ ' + result);

} else if (calc <= 4500) {
  
  aux1 = calc - 2000;
  aux2 = calc - 3000;
  aux2 = aux2 >= 0 ? aux2 : 0;
    
  segundaFaixa = ((calc - 2000) - aux2) * 0.08;
  terceiraFaixa = (calc - 3000) * 0.18;
    
  result = parseFloat(segundaFaixa + terceiraFaixa);
  result = result.toFixed(2);
    
  console.log('R$ ' + result);

} else {
  
  aux1 = calc - 2000;
  aux2 = calc - 3000;
  aux3 = calc - 4500;
  aux2 = aux2 >= 0 ? aux2 : 0;
  aux3 = aux3 >= 0 ? aux3 : 0;
    
  segundaFaixa = ((calc - 2000) - aux2) * 0.08;
  terceiraFaixa = ((calc - 3000) - aux3) * 0.18;
  quartaFaixa =  (calc - 4500) * 0.28;
    
  result = parseFloat(segundaFaixa+terceiraFaixa+quartaFaixa);
  result = result.toFixed(2);
   
  console.log('R$ ' + result);

}