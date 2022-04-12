/*

Desafio
Para dar conta de toda a fabricação dos presentes de Natal, por várias vezes os elfos precisam ficar até tarde trabalhando para que tudo possa ser terminado a tempo.

Para melhor gerenciar seus cronogramas, os elfos estipularam quantos minutos são necessários para fabricar cada presente.

Já está quase no final do expediente, e um dos elfos pediu sua ajuda.

Faltam N minutos para a hora de ir embora, e restam dois presentes para o elfo Dobby fabricar. Ajude-o a descobrir se ele conseguirá fabricar os dois ainda hoje, ou se deve deixar o trabalho para amanhã.

Entrada
Cada caso de teste inicia com um inteiro N, indicando quantos minutos faltam para o final do expediente (2 <= N <= 100).

Em seguida haverá dois inteiros A e B, indicando quantos minutos são necessários para fabricar os dois presentes que Dobby precisa fabricar (1 <= A, B <= 100).

Saída
Imprima uma linha, contendo a frase "Farei hoje!" caso seja possível fabricar os dois presentes antes do final do expediente, ou "Deixa para amanha!" caso contrário.



*/


using System;

class PizzaAntesDoFinalDoAno 
{
    static void Main()
    {  
        string[] line = Console.ReadLine().Split(" ");
        
        int N = int.Parse(line[0]);
        int D = int.Parse(line[1]);
        
        string data = "";
        
        int qtd = 0;
        
        bool achou = false;

        for (int dt=0; dt<D; dt++) 
        {
          qtd = 0;

          string[] dados = Console.ReadLine().Split(" ");
          
          data =  dados[0];
          
          for (int p=1; p<N+1; p++)
          {
              qtd += int.Parse( dados[p] );
          }

          achou = ( qtd == N);
          
          if (achou) 
          { 
              break; 
          }
        } 
        
        if (achou)
        { 
            Console.Write(data); 
        }
        else 
        { 
            Console.Write("Pizza antes de FdA"); 
        }
    }
}

