// Criação da matriz 4x4 (valores de exemplo)
const matriz = [
    [10, 2, 3, 4],
    [5, 20, 7, 8],
    [9, 10, 30, 12],
    [13, 14, 15, 40]
];
// Exibir a matriz completa 
const matrizDiv = document.getElementById("matriz");
let matrizHTML = "<h2>Matriz Completa:</h2><table border='1' cellpadding='10'>";
for (let i = 0; i < 4; i++) {
    matrizHTML += "<tr>";
    for (let j = 0; j < 4; j++) {
        matrizHTML += `<td>${matriz[i][j]}</td>`;
    }
    matrizHTML += "</tr>";
}
matrizHTML += "</table>";
matrizDiv.innerHTML = matrizHTML;

// Mostrar apenas os valores da diagonal principal
const diagonalDiv = document.getElementById("diagonal");
let diagonalHTML = "<h2>Diagonal Principal:</h2><ul>";
for (let i = 0; i < 4; i++) {
    diagonalHTML += `<li>${matriz[i][i]}</li>`;
}
diagonalHTML += "</ul>";
diagonalDiv.innerHTML = diagonalHTML;