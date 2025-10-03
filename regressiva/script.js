document.addEventListener("DOMContentLoaded", function () {
  const botao = document.getElementById("btnContar");
  const saida = document.getElementById("saida");

  botao.addEventListener("click", function () {
    let contador = 10;
    let resultado = "";

    while (contador >= 1) {
      resultado += contador + "\n";
      contador--;
    }

    resultado += "Contagem finalizada!";
    saida.textContent = resultado;
  });
});