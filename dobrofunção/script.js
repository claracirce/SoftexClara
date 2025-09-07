// Função que retorna o dobro de um número
function dobro(x) {
    return x * 2;
}

// Função chamada ao clicar no botão
function calcularDobro() {
    const input = document.getElementById("numero");
    const valor = Number(input.value);

    if (isNaN(valor)) {
        document.getElementById("resultado").innerText = "Por favor, digite um número válido.";
    } else {
        const resultado = dobro(valor);
        document.getElementById("resultado").innerText = `O dobro de ${valor} é ${resultado}.`;
    }
}