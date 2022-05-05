/**
 * Pink e C�rebro
 *
 * Desafio:
 * - Pink e C�rebro dividem um apartamento e est�o juntos 
 * 24h por dia desde o come�o da pandemia. Para passar o tempo, 
 * Pink cria problemas matem�ticos para C�rebro resolver, o 
 * �ltimo deles foi uma lista de n�meros com a seguinte pergunta: 
 * quantos n�meros da lista s�o m�ltiplos de 2, 3, 4 e 5?
 * 
 * - Apesar de parecer simples, por�m, quando a lista cont�m muitos 
 * n�meros, C�rebro se confunde e acaba errando alguns c�lculos.
 * 
 * - Ajude C�rebro a resolver o desadio de Pink.
 * 
 * Entrada:
 * - A primeira linha da entrada consiste em um inteiro N (1 = N =1000), 
 * representando a quantidade de n�meros na lista de Pink.
 * 
 * - A segunda linha cont�m N inteiros Li (1 = Li = 100), representando 
 * os n�meros da lista de Pink.
 * 
 * Sa�da:
 * - Imprima a quantidade de n�meros m�ltiplos de 2, 3, 4 e 5 presentes 
 * na lista. Observe a formata��o da sa�da nos exemplos, pois ela deve 
 * ser seguida rigorosamente.
 */

let n = gets();
let lis = gets().split(' ');
let increment = 0;

for (let mlt = 0; mlt <= 3; mlt++) {
    
    lis.forEach(li => {
        
        if(li % (mlt + 2) == 0) {
            
            increment++;
            
        }
    
    })
    
    console.log(`${increment} Multiplo(s) de ${mlt + 2}`)
    increment = 0;

}