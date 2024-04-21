
var salarioInicial = 1000;

for (var ano = 1996; ano <= 2024; ano++) {
    salarioInicial *= 1 + (ano - 1995) * 0.015;
}


console.log("Salário atual do funcionário:", salarioInicial.toFixed(2));



var salarioInicial = parseFloat(prompt("Digite o salário inicial do funcionário:"));


for (var ano = 1996; ano <= 2024; ano++) {
    salarioInicial *= 1 + (ano - 1995) * 0.015;
}


console.log("Salário atual do funcionário:", salarioInicial.toFixed(2));
