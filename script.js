function converter() {
    let valor = parseFloat(document.getElementById("valor").value);
    let moeda = document.getElementById("moeda").value;
    let resultado = document.getElementById("resultado");

    if (isNaN(valor) || valor <= 0) {
        resultado.innerHTML = "Digite um valor válido!";
        return;
    }

    let valorConvertido;
    let textoMoeda;

    switch (moeda) {
        case "USD":
            valorConvertido = valor / 5.10;
            textoMoeda = `US$ ${valorConvertido.toFixed(2)}`;
            break;

        case "EUR":
            valorConvertido = valor / 5.50;
            textoMoeda = `€ ${valorConvertido.toFixed(2)}`;
            break;

        case "GBP":
            valorConvertido = valor / 6.40;
            textoMoeda = `£ ${valorConvertido.toFixed(2)}`;
            break;
    }

    resultado.innerHTML = `Resultado: ${textoMoeda}`;
}