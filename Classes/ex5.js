// Classe base: Funcionario
class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
    // Método que retorna uma descrição do funcionário
    descricao() {
        return `Funcionario ${this.nome}, salario: ${this.salario}`;
    }
}
// herança é o mecanismo que permite reutilizar código de uma classe base em outra classe.

// Classe derivada: Gerente
class Gerente extends Funcionario { // extends cria herança
    constructor(nome, salario, departamento) {
        super(nome, salario);  // super chama o construtor da classe pai (Funcionario)
        this.departamento = departamento;
    }
    
    descricao() {
        return `Gerente ${this.nome}, salario: ${this.salario}, departamento: ${this.departamento}`;
    }
}

// Teste
const funcionario = new Funcionario("Ana", 3000);
console.log(funcionario.descricao());

const gerente = new Gerente("Clara", 7000, "TI");
console.log(gerente.descricao());