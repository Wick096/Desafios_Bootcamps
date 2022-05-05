/**
 * O Escolhido
 *
 * Desafio:
 * - As aulas do Prof. Xavier estão dando o que falar 
 * até no exterior, pois ele ensina Algorítmos de um 
 * jeito diferente aos seus alunos. Uma universidade 
 * dos EUA, que soube sobre o método do Prof. Xavier, 
 * quer selecionar um aluno para um intercâmbio no país. 
 * Para isso, ele possuem uma lista de inscrição com o 
 * número de cada aluno e sua nota. 
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