document.addEventListener("DOMContentLoaded", () => { // garante que o html carregue primeiro antes do javascript, assim evita erros.
    const btn = document.getElementById("btnVerificar"); // pega o botão atraves do id e cria uma variavel pro botão.
    const resultado = document.getElementById("resultado"); // pega o resultado atraves do id e cria uma variavel pro id.

    btn.addEventListener("click", () => { // garante que ao clicar no botão executara o bloco abaixo.
        let idade = Number(document.getElementById("idade").value); // pega a idade atraves do id e cria uma variavel pra armazenar um valor number.
        let temCNH = document.getElementById("cnh").checked; // pega a cnh atraves do id e cria uma variavel e usa o checked pra selecionar.
        if(idade >= 18 && temCNH) {
            resultado.textContent = "Pode dirigir";
            resultado.className = "verde";
        }else{
            resultado.textContent = "Não pode iniciar";
            resultado.className = "vermelho";
        }
    });
});