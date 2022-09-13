function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmBitcoin = parseInt(valor);

    var valorEmReal = valorEmBitcoin * 0.0000091;
    console.log(valorEmReal);

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O Valor do BTC em Real é " + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterDolar() {
    var valorElemento = document.getElementById("valorDolar");
    var valor = valorElemento.value;
    var valorEmBitcoin = parseInt(valor);

    var valorEmDolar = valorEmBitcoin * 0.000046;
    console.log(valorEmDolar);

    var elementoValorConvertido = document.getElementById("valorConvertidoDolar");
    var valorConvertidoDolar = "O Valor do BTC em Dolar é " + valorEmDolar;
    elementoValorConvertido.innerHTML = valorConvertidoDolar;
}
