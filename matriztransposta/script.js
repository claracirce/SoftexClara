// Matriz 2x3 (2 linhas, 3 colunas)
const matriz = [
    [1, 2, 3],
    [4, 5, 6]
];

// Função para exibir uma matriz como tabela HTML
function exibirMatriz(matriz, titulo, elementoId) {
    const div = document.getElementById(elementoId);
    let html = `<h2>${titulo}</h2><table border="1" cellpadding="10">`;
    for (let i = 0; i < matriz.length; i++) {
        html += "<tr>";
        for (let j = 0; j < matriz[i].length; j++) {
            html += `<td>${matriz[i][j]}</td>`;
        }
        html += "</tr>";
    }
    html += "</table>";
    div.innerHTML = html;
}

// Gerar matriz transposta (3x2)
function transporMatriz(m) {
    const linhas = m.length;
    const colunas = m[0].length;
    let transposta = [];

    for (let j = 0; j < colunas; j++) {
        transposta[j] = [];
        for (let i = 0; i < linhas; i++) {
            transposta[j][i] = m[i][j];
        }
    }
    return transposta;
}

// Exibir matriz original
exibirMatriz(matriz, "Matriz Original (2x3)", "original");

// Calcular e exibir matriz transposta
const transposta = transporMatriz(matriz);
exibirMatriz(transposta, "Matriz Transposta (3x2)", "transposta");