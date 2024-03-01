/* eslint-disable no-undef */
const conversorDeBitcoin = require('./index');

describe('Testa o conversor de bitcoin para real', () => {
  test('Verifica se a resposta está correta', () => {
    expect(conversorDeBitcoin(1)).toBe(300000.00);
  });
});
