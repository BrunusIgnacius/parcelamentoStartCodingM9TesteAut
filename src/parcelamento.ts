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
            valorParcela: valorCompra / numeroParcelas,
            totalParcelas: numeroParcelas
        };
    }

    else if (numeroParcelas >= 5 && numeroParcelas <= 8) {
        const valorComJuros = valorCompra * 1.05;
        return {
            valorParcela: valorComJuros / numeroParcelas,
            totalParcelas: numeroParcelas
        };
    }

    else if (numeroParcelas >= 9 && numeroParcelas <= 12) {
        const valorComJuros = valorCompra * 1.08;
        return {
            valorParcela: valorComJuros / numeroParcelas,
            totalParcelas: numeroParcelas
        };
    }

    throw new Error('Número de parcelas inválido');
}