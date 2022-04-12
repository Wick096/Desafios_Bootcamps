/*

Desafio
Para dar conta de toda a fabrica��o dos presentes de Natal, por v�rias vezes os elfos precisam ficar at� tarde trabalhando para que tudo possa ser terminado a tempo.

Para melhor gerenciar seus cronogramas, os elfos estipularam quantos minutos s�o necess�rios para fabricar cada presente.

J� est� quase no final do expediente, e um dos elfos pediu sua ajuda.

Faltam N minutos para a hora de ir embora, e restam dois presentes para o elfo Dobby fabricar. Ajude-o a descobrir se ele conseguir� fabricar os dois ainda hoje, ou se deve deixar o trabalho para amanh�.

Entrada
Cada caso de teste inicia com um inteiro N, indicando quantos minutos faltam para o final do expediente (2 <= N <= 100).

Em seguida haver� dois inteiros A e B, indicando quantos minutos s�o necess�rios para fabricar os dois presentes que Dobby precisa fabricar (1 <= A, B <= 100).

Sa�da
Imprima uma linha, contendo a frase "Farei hoje!" caso seja poss�vel fabricar os dois presentes antes do final do expediente, ou "Deixa para amanha!" caso contr�rio.



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

