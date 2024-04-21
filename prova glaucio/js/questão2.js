var quantidadePares = 0;
var quantidadeImpares = 0;


for (var i = 0; i < 10; i++) {
    var numero = parseInt(prompt("Digite o " + (i + 1) + "º número inteiro:"));

    if (numero % 2 === 0) {
        quantidadePares++;
    } else {
        quantidadeImpares++;
    }
}

console.log("Quantidade de números pares: " + quantidadePares);
console.log("Quantidade de números ímpares: " + quantidadeImpares);
