document.addEventListener("DOMContentLoaded", () => { // Essa linha garante que o JavaScript só será executado depois que o HTML estiver completamente carregado. 
    const btn = document.getElementById("btnCalcular"); // Pega o botão com o ID btnCalcular, que provavelmente está no HTML, e guarda em uma variável chamada btn

    btn.addEventListener("click", () => { // Quando o botão for clicado, o código dentro desse bloco será executado.
        let num1 = Number(document.getElementById("num1").value);
        let num2 = Number(document.getElementById("num2").value);
        // Busca os valores dos campos com ID num1 e num2.
        // Usa Number() para converter o valor (que é texto) em número.

        if (isNaN(num1) || isNaN(num2)) { 
            alert("Digite dois números válidos!");
            return;
        } // Verifica se algum dos dois valores não é um número. Se forem inválidos, 
        // mostra um alerta e interrompe a execução do restante do código com return.

        document.getElementById("soma").textContent = num1 + num2;
        document.getElementById("subtracao").textContent = num1 - num2;
        document.getElementById("multiplicacao").textContent = num1 * num2;
        document.getElementById("divisao").textContent = num2 !== 0 ? (num1 / num2).toFixed(2) : `Divisão por 0`;
        document.getElementById("resto").textContent = num2 !== 0 ? num1 % num2: `Não aplicável`;

        
        });
    });
