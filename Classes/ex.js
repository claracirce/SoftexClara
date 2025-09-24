// criar classes de uma biblioteca, com objetos, atributos e metodos

// class livro 
class livro {
    constructor(titulo, autor, ano){
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
    }
}

// class cliente
class cliente {
    constructor(nome, matricula, telefone, email, endereco){
        this.nome = nome;
        this.matricula = matricula;
        this.telefone = telefone;
        this.email = email;
        this.endereco = endereco;
    }
}
// class biblioteca
class biblioteca {
    constructor(nome, endereco){
        this.nome = nome;
        this.endereco = endereco;
        this.livros = [];     // inicia como array vazio
        this.clientes = []; 
    }

// metodo para adicionar livros, clientes etc...

adicionarLivro(livro){
    this.livros.push(livro);
}
adicionarcliente(cliente){
    this.clientes.push(cliente);
}
}

// criando objetos 
const livro1 = new livro("O colecionador", "John Fowles", "1963");
const livro2 = new livro("Gnomos", "Wil Huygen", "1976" );

const cliente1 = new cliente ("Clara", "5673", "819634-7706", "clara@gmail.com", "Rua Dom Pedro");
const cliente2 = new cliente ("Ana", "5534", "811233-7717", "ana@gmail.com", "Rua 17 de março ");

const minhaBiblioteca = new biblioteca("Biblioteca das ladeiras", "Olinda" );
// adicionando livros e clientes
minhaBiblioteca.adicionarLivro(livro1);
minhaBiblioteca.adicionarLivro(livro2);
minhaBiblioteca.adicionarcliente(cliente1);
minhaBiblioteca.adicionarcliente(cliente2);

// exibindo no HTML 
document.getElementById("saida").innerHTML = `
    <strong>Nome da biblioteca:</strong> ${minhaBiblioteca.nome}<br>
    <strong>Endereço:</strong> ${minhaBiblioteca.endereco}<br><br>

    <strong>📚 Livros disponíveis:</strong><br>
    <ul>
        ${minhaBiblioteca.livros.map(livro => 
            `<li>${livro.titulo} - ${livro.autor} (${livro.ano})</li>`
        ).join("")}
    </ul>

    <strong>👥 Clientes cadastrados:</strong><br>
    <ul>
        ${minhaBiblioteca.clientes.map(cliente => 
            `<li>${cliente.nome} - Matrícula: ${cliente.matricula}, Tel: ${cliente.telefone}</li>`
        ).join("")}
    </ul>
`;

