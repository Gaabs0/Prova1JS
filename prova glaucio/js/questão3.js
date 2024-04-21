var quantidadeNumeros = parseInt(prompt("Quantos números você deseja inserir?"));
var menorValor = Infinity;
var maiorValor = -Infinity;
var soma = 0;

for (var i = 0; i < quantidadeNumeros; i++) {
    var numero = parseFloat(prompt("Digite o " + (i + 1) + "º número:"));
    menorValor = Math.min(menorValor, numero);
    maiorValor = Math.max(maiorValor, numero);
    soma += numero;
}


console.log("Menor valor:", menorValor);
console.log("Maior valor:", maiorValor);
console.log("Soma dos valores:", soma);
