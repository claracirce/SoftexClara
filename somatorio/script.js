let soma = 0;

document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("numeroInput");
  const btnAdicionar = document.getElementById("btnAdicionar");
  const btnFinalizar = document.getElementById("btnFinalizar");
  const resultado = document.getElementById("resultado");

  btnAdicionar.addEventListener("click", function () {
    const valor = parseFloat(input.value);

    if (isNaN(valor)) {
      alert("Digite um número válido.");
    } else if (valor === 0) {
      alert("Número 0 digitado. Clique em 'Finalizar' para ver a soma.");
    } else {
      soma += valor;
    }

    input.value = "";
    input.focus();
  });

  btnFinalizar.addEventListener("click", function () {
    resultado.textContent = "A soma dos números é: " + soma;
  });
});