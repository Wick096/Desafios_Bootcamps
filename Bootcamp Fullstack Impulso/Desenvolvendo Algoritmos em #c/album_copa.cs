/**
 * Desafio : �lbum da Copa
 *      Rubens quer calcular e mostrar a quantidade de litros de combust�vel gastos 
 * em uma viagem de carro, sendo que seu carro faz 12 KM/L. Como ele n�o sabe fazer 
 * um programa que o auxilie nessa miss�o, ele te pede ajuda. Para efetuar o c�lculo, 
 * deve-se fornecer o tempo gasto em horas na viagem e a velocidade m�dia durante a 
 * mesma em km/h. Assim, voc� conseguir� passar para Rubens qual a dist�ncia percorrida 
 * e, em seguida, calcular quantos litros ser�o necess�rios para a viagem que ele quer 
 * fazer. Mostre o valor com 3 casas decimais ap�s o ponto.
 *
 * Entrada
 *      O arquivo de entrada cont�m dois inteiros. O primeiro � o tempo gasto na viagem em 
 * horas e o segundo � a velocidade m�dia durante a mesma em km/h.
 *
 * Sa�da
 *      Imprima a quantidade de litros necess�ria para realizar a viagem, com tr�s d�gitos 
 * ap�s o ponto decimal.
 */

using System;

class Program 
{
    static void Main(string[] args) 
    {
        int numeroDeFigurinhas = int.Parse(Console.ReadLine());
        int numeroDeFigurinhasCompradas = int.Parse(Console.ReadLine());
        int totalDeFigurinhas = 0;

        int[] albumDeFigurinha = new int[numeroDeFigurinhasCompradas];

        for (int i = 0; i < numeroDeFigurinhasCompradas; i++) 
        {
            string entrada = Console.ReadLine();
            
            if (entrada != null) 
            {
                albumDeFigurinha[i] = int.Parse(entrada);
            }
        }

        for (int i = 0; i < numeroDeFigurinhasCompradas; i++) 
        {
            int figurinha = albumDeFigurinha[i];
            int repetida = 0;

            for (int j = 0; j < numeroDeFigurinhasCompradas; j++) 
            {
                if (albumDeFigurinha[j] == figurinha) 
                {
                    repetida++;
                } 
            }

            if (repetida >= 2) 
            {    
                for (int j = 0; j < numeroDeFigurinhasCompradas; j++) {
                    if (figurinha == albumDeFigurinha[j]) { 
                        albumDeFigurinha[j] = -1;
                        break;
                    }
                }
            }
        }

        int figuras = 0;

        for (int i = 0; i < numeroDeFigurinhasCompradas; i++) 
        {    
            if (albumDeFigurinha[i] != -1) 
            {
                figuras++;
            }
        }
        totalDeFigurinhas = numeroDeFigurinhas - figuras;
        Console.Write(totalDeFigurinhas);
    }
}