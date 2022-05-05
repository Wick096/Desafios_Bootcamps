/**
 * O Escolhido
 *
 * Desafio:
 * - As aulas do Prof. Xavier est�o dando o que falar 
 * at� no exterior, pois ele ensina Algor�tmos de um 
 * jeito diferente aos seus alunos. Uma universidade 
 * dos EUA, que soube sobre o m�todo do Prof. Xavier, 
 * quer selecionar um aluno para um interc�mbio no pa�s. 
 * Para isso, ele possuem uma lista de inscri��o com o 
 * n�mero de cada aluno e sua nota. 
 * 
 
 */

let n = parseInt(gets());

let arrMat = Array(n);
let arrNot = Array(n);

for (i = 0; i < n; i++) {
    
    let line = gets().split(' ');
    
    arrMat[i] = parseInt(line[0]);
    arrNot[i] = parseFloat(line[1]);

}

let maior = 0;

var max = arrNot.reduce(function(a, b) {
    
    return Math.max(a, b);

}); 

for (i = 0; i < n; i++) {
    
    if (max < 8) {
        
        console.log('Minimum note not reached'); 
        break;
    
    } else if (arrNot[i] === max) {
        
        console.log(arrMat[i]);
    
    }

}