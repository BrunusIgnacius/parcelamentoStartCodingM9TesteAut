import { describe, it, expect } from 'vitest'
import { calcularParcelamento } from './parcelamento.ts'

describe('calcularParcelamento', () => {
    describe('sem juros (1x a 4x)', () => {
        it('retorna o valor total em parcela única quando for 1x', () => {
            //arrange
            const valorcompra = 1000;
            const nParcelas = 1;
            //act 
            const result = calcularParcelamento(valorcompra, nParcelas);

            //asse
            expect(result).toEqual({
                valorParcela: 1000,
                totalParcelas: 1
            });
        });

    });

    it('divide o valor sem juros quando for 4x', () => {

        //arrange
        const valorcompra = 1000;
        const nParcelas = 4;
        //act 
        const result = calcularParcelamento(valorcompra, nParcelas);

        //asse
        expect(result).toEqual({
            valorParcela: 250,
            totalParcelas: 4
        });
    })

    describe('com juros', () => {
        it('aplica 5% sobre o total quando for de 5x a 8x', () => {
            //arrange
            const valorcompra = 1000;
            const nParcelas = 5;
            //act 
            const result = calcularParcelamento(valorcompra, nParcelas);

            //asse
            expect(result).toEqual({
                valorParcela: 210,
                totalParcelas: 5
            });
        })
        it('aplica 8% sobre o total quando for de 9x a 12x', () => {
            //arrange
            const valorcompra = 1000;
            const nParcelas = 9;
            //act 
            const result = calcularParcelamento(valorcompra, nParcelas);

            //asse
            expect(result).toEqual({
                valorParcela: 120,
                totalParcelas: 9
            });
        })
        it('aplica 10% sobre o total quando for de 13x a 18x', () => {
            //arrange
            const valorcompra = 1000;
            const nParcelas = 13;
            //act 
            const result = calcularParcelamento(valorcompra, nParcelas);

            //asse
            expect(result).toEqual({
                valorParcela: 84.62,
                totalParcelas: 13
            });
        })
        it('aplica a faixa correta nos limites (4x, 5x, 8x, 9x, 12x, 13x)', () => {
            //arrange
            const valorcompra = 1000;

            const casosDeTeste = [
                { nParcelas: 4, valorEsperado: 250 },
                { nParcelas: 5, valorEsperado: 210 },
                { nParcelas: 8, valorEsperado: 131.25 },
                { nParcelas: 9, valorEsperado: 120 },
                { nParcelas: 12, valorEsperado: 90 },
                { nParcelas: 13, valorEsperado: 84.62 },
            ];
            //act 
            casosDeTeste.forEach(({ nParcelas, valorEsperado }) => {
                const result = calcularParcelamento(valorcompra, nParcelas);
                //asse
                expect(result).toEqual({
                    valorParcela: valorEsperado,
                    totalParcelas: nParcelas
                });
            });
        });

    })
})
describe('arredondamento', () => {
    it('arredonda o valor da parcela para 2 casas decimais', () => {
        //arrange
            const valorcompra = 1000;
            const nParcelas = 13;
            //act 
            const result = calcularParcelamento(valorcompra, nParcelas);

            //asse
            expect(result).toEqual({
                valorParcela: 84.62,
                totalParcelas: 13
            });
    })
})
describe('validações', () => {
    it('lança erro quando o número de parcelas for menor que 1', () => {
        expect(() => calcularParcelamento(1000, 0)).toThrow('Número de parcelas inválido');
    })
    it('lança erro quando o número de parcelas for maior que 18', () => {
        expect(() => calcularParcelamento(1000, 19)).toThrow('Número de parcelas inválido');
    })

    it('lança erro quando o número de parcelas não for inteiro', () => {
        expect(() => calcularParcelamento(1000, 2.5)).toThrow('Número de parcelas inválido');
    })
    it('lança erro quando o valor da compra for zero ou negativo', () => {

        expect(() => calcularParcelamento(0, 3)).toThrow('Valor da compra inválido');
        expect(() => calcularParcelamento(-50, 3)).toThrow('Valor da compra inválido');
    })
})