function calcularAnos(populacaoA, taxaCrescimentoA, populacaoB, taxaCrescimentoB) {
    const anos = Math.ceil(Math.log(populacaoB / populacaoA) / Math.log(1 + taxaCrescimentoA / 100 - taxaCrescimentoB / 100));
    return anos;
}

const populacaoA = 80000;
const taxaCrescimentoA = 3;
const populacaoB = 200000;
const taxaCrescimentoB = 1.5;

const anosNecessarios = calcularAnos(populacaoA, taxaCrescimentoA, populacaoB, taxaCrescimentoB);

console.log(`Número de anos necessários: ${anosNecessarios}`);