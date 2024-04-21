function calcularMontante(capitalInicial, taxaJuros, tempoMeses) {

    var taxaDecimal = taxaJuros / 100;


    var montante = capitalInicial * Math.pow((1 + taxaDecimal), tempoMeses);


    return montante.toFixed(2);
}


var capitalInicial = parseFloat(prompt("Digite o capital inicial investido:"));
var taxaJuros = parseFloat(prompt("Digite a taxa de juros mensal em percentual:"));
var tempoMeses = parseInt(prompt("Digite o tempo do investimento em meses:"));

var resultado = calcularMontante(capitalInicial, taxaJuros, tempoMeses);
console.log("O montante do investimento é:", resultado);
