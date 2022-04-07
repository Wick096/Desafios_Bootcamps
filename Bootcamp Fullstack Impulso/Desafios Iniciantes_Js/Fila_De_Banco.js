/*
Desafio 
O banco que voc� trabalha sempre tem problemas para organizar as filas de atendimento dos clientes.

Ap�s uma reuni�o com a ger�ncia ficou decidido que os clientes ao chegar na ag�ncia receber�o uma senha num�rica em seu aparelho de celular via sms e que a ordem da fila ser� dada n�o pela ordem de chegada, mas sim pelo n�mero recebido via sms. A ordem de atendimento ser� decrescente: aqueles que receberam n�mero maior dever�o ser atendidos primeiro. 

Ent�o, dada a ordem de chegada dos clientes reordene a fila de acordo com o n�mero recebido via sms, e diga quantos clientes n�o precisaram trocar de lugar nessa reordena��o.

Entrada
A primeira linha cont�m um inteiro N, indicando o n�mero de casos de teste a seguir.

Cada caso de teste inicia com um inteiro M (1 = M = 1000), indicando o n�mero de clientes. Em seguida haver� M inteiros distintos Pi (1 = Pi = 1000), onde o i-�simo inteiro indica o n�mero recebido via sms do i-�simo cliente.

Os inteiros acima s�o dados em ordem de chegada, ou seja, o primeiro inteiro diz respeito ao primeiro cliente a chegar na fila, o segundo inteiro diz respeito ao segundo cliente, e assim sucessivamente.

Sa�da
Para cada caso de teste imprima uma linha, contendo um inteiro, indicando o n�mero de clientes que n�o precisaram trocar de lugar mesmo ap�s a fila ser reordenada.



*/

let num = 0;
let index = 0;
let cof = 0;

num = parseInt(gets());

let filas = Array(num);
let cad = Array(num);
let ordem = Array(num);

while (index < num ) {
  id = gets();
  line = gets();

  filas[index] = line.split(" ");
  cad[index] = line.split(" ");
  
  index++;
};

cad.forEach(i => i.sort((a, b) => b-a));

while (cof < num ) {
  ordem[cof] = cad[cof].filter((i,d) => d === filas[cof].indexOf(i));
  
  cof++;
};

ordem.forEach(i => console.log(i.length)); 