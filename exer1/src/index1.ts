class Pessoa {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }

    apresentar(): string {
        return `Olá! Meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
}

const aluno1 = new Pessoa ("Clara", 25);
console.log(aluno1.apresentar());


