function calcularAreaEPerimetro(raio) {

    var area = Math.PI * Math.pow(raio, 2);


    var perimetro = 2 * Math.PI * raio;


    return {
        area: area.toFixed(2),
        perimetro: perimetro.toFixed(2)
    };
}


var raio = 5;
var resultados = calcularAreaEPerimetro(raio);
console.log("Área do círculo:", resultados.area);
console.log("Perímetro do círculo:", resultados.perimetro);
