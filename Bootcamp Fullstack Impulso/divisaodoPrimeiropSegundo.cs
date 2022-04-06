Desafio
Voc� ter� o desafio de escrever um algoritmo que leia 2 n�meros e imprima o resultado da divis�o do primeiro pelo segundo. Caso n�o for poss�vel, mostre a mensagem �divisao impossivel� para os valores em quest�o.

Entrada
A entrada cont�m um n�mero inteiro N. Este N ser� a quantidade de pares de valores inteiros (X e Y) que ser�o lidos em seguida.

Sa�da
Para cada caso mostre o resultado da divis�o com um d�gito ap�s o ponto decimal, ou �divisao impossivel� caso n�o seja poss�vel efetuar o c�lculo.

Resolu��o:

using System;

class Desafio {
  static void Main() {
    int limit = Int32.Parse(Console.ReadLine());

    for (int i = 0; i < limit; i++) {
      string[] line = Console.ReadLine().split(" ");
      double X = double.Parse(line[0]);
      double Y = double.Parse(line[1]);

      if (Y == 0) {
        Console.WriteLine("divisao impossivel");
      } else {
        double divisao = X / Y;

        if (divisao < 0 && (divisao.ToString("N1") == "0.0"))
          Console.WriteLine("-0.0");
        else
          Console.WriteLine(divisao.ToString("N1"));
      }
    }
  }
}
