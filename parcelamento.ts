export type ResultadoParcelamento = {
    valorParcela: number
    totalParcelas: number
}
export function calcularParcelamento(
    valorCompra: number,
    numeroParcelas: number
): ResultadoParcelamento {
    if (numeroParcelas >= 1 && numeroParcelas <= 4) {
        return {
            valorParcela: Number((valorCompra / numeroParcelas).toFixed(2)),
            totalParcelas: numeroParcelas
        };
    }

    else if (numeroParcelas >= 5 && numeroParcelas <= 8) {
        const valorComJuros = valorCompra * 1.05;
        return {
            valorParcela: Number((valorComJuros / numeroParcelas).toFixed(2)),
            totalParcelas: numeroParcelas
        };
    }

    else if (numeroParcelas >= 9 && numeroParcelas <= 12) {
        const valorComJuros = valorCompra * 1.08;
        return {
            valorParcela: Number((valorComJuros / numeroParcelas).toFixed(2)), 
            totalParcelas: numeroParcelas
        };
    }

    else if (numeroParcelas >= 13 && numeroParcelas <= 18) {
        const valorComJuros = valorCompra * 1.10;
        return {
            valorParcela: Number((valorComJuros / numeroParcelas).toFixed(2)),
            totalParcelas: numeroParcelas
        };
    }

    throw new Error('Número de parcelas inválido');
}