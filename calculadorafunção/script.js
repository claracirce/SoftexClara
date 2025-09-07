// Funções matemáticas
function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "Erro: divisão por zero!";
    }
    return a / b;
}

// Função para mostrar o resultado
function mostrarResultado(operacao) {
    const v1 = Number(document.getElementById("valor1").value);
    const v2 = Number(document.getElementById("valor2").value);
    let resultado;

    switch (operacao) {
        case 'soma':
            resultado = somar(v1, v2);
            break;
        case 'subtracao':
            resultado = subtrair(v1, v2);
            break;
        case 'multiplicacao':
            resultado = multiplicar(v1, v2);
            break;
        case 'divisao':
            resultado = dividir(v1, v2);
            break;
        default:
            resultado = "Operação inválida";
    }

    document.getElementById("resultado").innerText = `Resultado: ${resultado}`;
}