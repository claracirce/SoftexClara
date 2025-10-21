document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btnVerificar");

    btn.addEventListener("click", () => {
        let login = document.getElementById("login").checked;
        let senha = document.getElementById("senha").checked;
        let res = document.getElementById("res");

    if (login && senha){
      res.innerHTML = `Acesso Liberado!`;  
      res.className = `verde`;
    }else{
        res.innerHTML = `Acesso Negado!`
        res.className = `vermelho`;
    }

    });
});

function criarEstrela() {
    const estrela = document.createElement('div');
    estrela.classList.add('estrela');
     estrela.innerText = '★'; // Unicode da estrela


    // Posição horizontal aleatória
    estrela.style.left = Math.random() * window.innerWidth + 'px';

    // Duração aleatória da animação
    const duracao = Math.random() * 3 + 2; // entre 2 e 5 segundos
    estrela.style.animationDuration = duracao + 's';

    document.getElementById('estrelas-container').appendChild(estrela);

    // Remover estrela após a animação terminar
    setTimeout(() => {
        estrela.remove();
    }, duracao * 1000);
}

// Criar uma nova estrela a cada 150ms
setInterval(criarEstrela, 150);