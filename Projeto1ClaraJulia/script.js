document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formNotas");
  const inputsContainer = document.getElementById("inputsAlunos");
  const tabela = document.querySelector("#tabelaNotas tbody");

  // Função para criar os inputs dinamicamente
  function criarInputs() {
    for (let i = 1; i <= 5; i++) {
      const div = document.createElement("div");
      div.innerHTML = `
        <strong>Aluno ${i}</strong><br/>
        Nome: <input type="text" name="nome${i}" required />
        Prova 1: <input type="number" name="p1_${i}" min="0" max="10" step="0.1" required />
        Prova 2: <input type="number" name="p2_${i}" min="0" max="10" step="0.1" required />
        Prova 3: <input type="number" name="p3_${i}" min="0" max="10" step="0.1" required />
        <br/><br/>
      `;
      inputsContainer.appendChild(div);
    }
  }

  // Função para limpar tabela antes de preencher
  function limparTabela() {
    tabela.innerHTML = "";
  }

  // Função para preencher tabela com dados do formulário
  function preencherTabela(alunos) {
    alunos.forEach(aluno => {
      const linha = document.createElement("tr");

      // Nome do aluno
      const celAluno = document.createElement("td");
      celAluno.textContent = aluno.nome;
      linha.appendChild(celAluno);

      // Notas e soma
      let soma = 0;
      aluno.notas.forEach(nota => {
        const celNota = document.createElement("td");
        celNota.textContent = nota;
        linha.appendChild(celNota);
        soma += nota;
      });

      // Média
      const media = soma / aluno.notas.length;
      const celMedia = document.createElement("td");
      celMedia.textContent = media.toFixed(2);
      linha.appendChild(celMedia);

      // Situação
      const celSituacao = document.createElement("td");
      if (media >= 7) {
        celSituacao.textContent = "Aprovado";
        celSituacao.className = "aprovado";
      } else if (media >= 5) {
        celSituacao.textContent = "Recuperação";
        celSituacao.className = "recuperacao";
      } else {
        celSituacao.textContent = "Reprovado";
        celSituacao.className = "reprovado";
      }
      linha.appendChild(celSituacao);

      tabela.appendChild(linha);
    });
  }

  // Gera inputs na página
  criarInputs();

  // Quando o formulário for enviado
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    limparTabela();

    const alunos = [];

    for (let i = 1; i <= 5; i++) {
      const nome = form[`nome${i}`].value.trim();
      const p1 = parseFloat(form[`p1_${i}`].value);
      const p2 = parseFloat(form[`p2_${i}`].value);
      const p3 = parseFloat(form[`p3_${i}`].value);

      alunos.push({
        nome,
        notas: [p1, p2, p3]
      });
    }

    preencherTabela(alunos);
  });
});