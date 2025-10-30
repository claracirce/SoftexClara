const form = document.getElementById('formProduto');
const tabela = document.getElementById('tabelaProdutos');
let produtos = JSON.parse(localStorage.getItem('produtos')) || [];

function salvarProdutos() {
  localStorage.setItem('produtos', JSON.stringify(produtos));
}

function calcularPrecoFinal(preco, desconto) {
  return preco - (preco * desconto / 100);
}

function renderProdutos() {
  tabela.innerHTML = '';
  produtos.forEach((p, index) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${index + 1}</td>
      <td>${p.nome}</td>
      <td>${p.categoria}</td>
      <td>R$ ${parseFloat(p.preco).toFixed(2)}</td>
      <td>${parseFloat(p.desconto).toFixed(2)}%</td>
      <td>R$ ${calcularPrecoFinal(p.preco, p.desconto).toFixed(2)}</td>
      <td><button onclick="removerProduto(${index})">Excluir</button></td>
    `;
    tabela.appendChild(tr);
  });
}

function removerProduto(index) {
  produtos.splice(index, 1);
  salvarProdutos();
  renderProdutos();
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const categoria = document.getElementById('categoria').value.trim();
  const preco = parseFloat(document.getElementById('preco').value);
  const desconto = parseFloat(document.getElementById('desconto').value);

  if (!nome || !categoria || isNaN(preco)) {
    alert("Preencha todos os campos corretamente!");
    return;
  }

  const novoProduto = { nome, categoria, preco, desconto };
  produtos.push(novoProduto);
  salvarProdutos();
  renderProdutos();
  form.reset();
});

renderProdutos();