"use strict";
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btnApresentar");
    if (!btn) {
        console.error("Botão não encontrado");
        return;
    }
    const pessoa = new Pessoa("Clara");
    btn.addEventListener("click", () => {
        btn.textContent = `Olá, meu nome é ${pessoa.nome}`;
    });
});
