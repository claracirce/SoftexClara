"use strict";
class Calculadora {
    somar(a, b) {
        return a + b;
    }
    subtrair(a, b) {
        return a - b;
    }
    multiplicar(a, b) {
        return a * b;
    }
    dividir(a, b) {
        if (b === 0)
            return "Erro: Divisão por zero";
        return a / b;
    }
}
const calc = new Calculadora();
function operar(operacao) {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    const resultadoDiv = document.getElementById("resultado");
    let resultado;
    switch (operacao) {
        case "somar":
            resultado = calc.somar(num1, num2);
            break;
        case "subtrair":
            resultado = calc.subtrair(num1, num2);
            break;
        case "multiplicar":
            resultado = calc.multiplicar(num1, num2);
            break;
        case "dividir":
            resultado = calc.dividir(num1, num2);
            break;
        default:
            resultado = "Operação inválida";
    }
    resultadoDiv.innerText = `Resultado ${resultado}`;
}
