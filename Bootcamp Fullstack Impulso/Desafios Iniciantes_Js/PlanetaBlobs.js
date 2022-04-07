/*
Desafio:
No planeta Alpha vive a criatura Blobs, que come precisamente 1/2 de seu suprimento de comida dispon�vel todos os dias. Escreva um algoritmo que leia a capacidade inicial de suprimento de comida (em Kg), e calcule quantos dias passar�o antes que Blobs coma todo esse suprimento at� restar um quilo ou menos.

Entrada
A primeira linha de entrada contem um �nico inteiro N (1 = N = 1000), indicando o n�mero de casos de teste. As N linhas seguintes cont�m um valor de ponto flutuante C (1 = C = 1000) correspondente � quantidade de comida dispon�vel para Blobs.

Sa�da
Para cada caso de teste, imprima uma linha contendo o n�mero de dias que Blobs ir� demorar para comer todo seu suprimento de comida, seguido da palavra "dias".

*/


let casoDeTeste = parseInt(gets());

function calcularDias(qtdComida) {
  if (qtdComida <= 1.0) {
    return 0;
  }
  
  const comeComida = qtdComida / 2.0;
  
  return 1 + calcularDias(comeComida);
}

while (casoDeTeste-- > 0) {
  const qtdComida = parseFloat(gets());
  const diasFinais = calcularDias(qtdComida);
  
  console.log(diasFinais, 'dias');
}