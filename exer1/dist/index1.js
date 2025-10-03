"use strict";
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    apresentar() {
        return `Olá! Meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
}
const aluno1 = new Pessoa("Clara", 25);
console.log(aluno1.apresentar());
