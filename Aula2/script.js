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

//  Geralmente, usamos Math.random() com multiplicações para gerar valores em faixas específicas. 
// Exemplo 1: Um número aleatório entre 0 e 100
// setTimeout serve para executar uma função uma única vez, depois de um tempo determinado (em milissegundos).
// setInterval executa uma função repetidamente em intervalos de tempo fixos (em milissegundos).
// appendChild é um método que adiciona um novo elemento como filho de outro no DOM (Document Object Model).