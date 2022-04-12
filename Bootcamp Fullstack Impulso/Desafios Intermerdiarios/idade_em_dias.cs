


/*
Desafio
Voc� ter� o desafio de ler um valor inteiro correspondente � idade de uma pessoa em dias e informe-a em anos, meses e dias

Obs.: apenas para facilitar o c�lculo, considere todo ano com 365 dias e todo m�s com 30 dias. Nos casos de teste nunca haver� uma situa��o que permite 12 meses e alguns dias, como 360, 363 ou 364. 

Entrada
O arquivo de entrada cont�m um valor inteiro.

Sa�da
Imprima a sa�da conforme exemplo fornecido.


*/


using System;

namespace Desafio
{using System;

class IdadeEmDias 
{  
  public static void Main (string[] args) 
  {  
    var idadeEmDias = int.Parse(Console.ReadLine());
   
    var anos = (idadeEmDias / 365); 
    var meses = (idadeEmDias % 365) / 30; 
    var dias =  (idadeEmDias % 365) % 30;

    Console.WriteLine($"{anos} ano(s)\n{meses} mes(es)\n{dias} dia(s)");
  }
}
}