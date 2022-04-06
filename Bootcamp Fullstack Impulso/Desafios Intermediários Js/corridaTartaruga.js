/*Desafio
A corrida de tartarugas � um esporte que cresceu muito nos �ltimos anos, fazendo com que v�rios competidores se dediquem a capturar tartarugas r�pidas, e treina-las para faturar milh�es em corridas pelo mundo. Por�m a tarefa de capturar tartarugas n�o � uma tarefa muito f�cil, pois quase todos esses r�pteis s�o bem lentos. Cada tartaruga � classificada em um n�vel dependendo de sua velocidade:


N�vel 1: Se a velocidade � menor que 10 cm/h .
N�vel 2: Se a velocidade � maior ou igual a 10 cm/h e menor que 20 cm/h .
N�vel 3: Se a velocidade � maior ou igual a 20 cm/h .

Sua tarefa � identificar qual o n�vel de velocidade da tartaruga mais veloz de um grupo.

Entrada
A entrada consiste de m�ltiplos casos de teste, e cada um consiste em duas linhas: A primeira linha cont�m um inteiro L (1 = L = 500) representando o n�mero de tartarugas do grupo, e a segunda linha cont�m L inteiros Vi (1 = Vi = 50) representando as velocidades de cada tartaruga do grupo.

Sa�da
Para cada caso de teste, imprima uma �nica linha indicando o n�vel de velocidade da tartaruga mais veloz do grupo.

*/


for (i = 0; i < 3; i++) {

    let t = gets();
    let v = gets();
    
    let arrayV = v.split(" ");
    
    let maior = 0;
    let nivel = 0;
  
    maior = arrayV.reduce((a, b) => (
      Math.max(a, b)
    )) 
  
    if (maior < 10) {
      
        nivel = 1;
    
    } else if (maior < 20) {
    
        nivel = 2;
    
    } else {
    
        nivel = 3
    }

    console.log(nivel)
  
}