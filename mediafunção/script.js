// Função que recebe um vetor de notas e retorna a média
function calcularMedia(notas) {
    let soma = 0;
    for (let nota of notas) {
        soma += nota;
    }
    return soma / notas.length;
}

// Função para pegar os dados, calcular e mostrar as médias
function mostrarMedias() {
    const aluno1 = [
        Number(document.getElementById("a1n1").value),
        Number(document.getElementById("a1n2").value),
        Number(document.getElementById("a1n3").value)
    ];

    const aluno2 = [
        Number(document.getElementById("a2n1").value),
        Number(document.getElementById("a2n2").value),
        Number(document.getElementById("a2n3").value)
    ];

    const aluno3 = [
        Number(document.getElementById("a3n1").value),
        Number(document.getElementById("a3n2").value),
        Number(document.getElementById("a3n3").value)
    ];

    const media1 = calcularMedia(aluno1);
    const media2 = calcularMedia(aluno2);
    const media3 = calcularMedia(aluno3);

    const resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = `
        <h3>Resultados:</h3>
        <p>Média do Aluno 1: ${media1.toFixed(2)}</p>
        <p>Média do Aluno 2: ${media2.toFixed(2)}</p>
        <p>Média do Aluno 3: ${media3.toFixed(2)}</p>
    `;
}