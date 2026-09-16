import { describe, it, expect } from 'vitest'
import { calcularParcelamento } from './parcelamento.ts'

describe('calcularParcelamento', () => {
describe('sem juros (1x a 4x)', () => {
it('retorna o valor total em parcela única quando for 1x')
    //arrange
    const valorcompra = 1000
    const nParcelas = 1
    //act 
    const result = calcularParcelamento(valorcompra, nParcelas)

    //asse
    expect(result).toEqual({
        valorParcela: 1000,
        totalParcelas: 1
    })

it('divide o valor sem juros quando for 4x')
})
describe('com juros', () => {
it('aplica 5% sobre o total quando for de 5x a 8x')
it('aplica 8% sobre o total quando for de 9x a 12x')
it('aplica 10% sobre o total quando for de 13x a 18x')
it('aplica a faixa correta nos limites (4x, 5x, 8x, 9x, 12x, 13x)')
})
describe('arredondamento', () => {
it('arredonda o valor da parcela para 2 casas decimais')
})
describe('validações', () => {
it('lança erro quando o número de parcelas for menor que 1')
it('lança erro quando o número de parcelas for maior que 18')
it('lança erro quando o número de parcelas não for inteiro')
it('lança erro quando o valor da compra for zero ou negativo')
})
})