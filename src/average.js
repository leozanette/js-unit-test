/*
  A função average recebe um array de tamanho variável e retorna a média dos valores recebidos.
  Caso a função receba algum valor não numérico ou um array vazio, o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;

*/

const average = (a) => {
  if (a.length === 0) { return undefined; }

  for (let key in a) {
    if (typeof a[key] !== 'number') { return undefined; }
  }

  let total = 0;
  for (let i = 0; i < a.length; i += 1) {
    total += a[i];
  }
  return Math.round(total / a.length);
};

module.exports = average;
