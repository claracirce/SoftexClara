"use strict";
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    // metodo para calcular o desconto
    desconto(porcentagem) {
        return this.preco * (porcentagem / 100);
    }
    resultado(porcentagem) {
        const valorDesconto = this.desconto(porcentagem);
        const precoFinal = this.preco - valorDesconto;
        return `${this.nome} custa R$ ${this.preco.toFixed(2)}. Desconto de ${porcentagem}%: R$ ${valorDesconto.toFixed(2)}. Preço final: R$ ${precoFinal.toFixed(2)}.`;
    }
}
//teste
const produto1 = new Produto("colchão", 200);
const porcentagem = 10;
console.log(produto1.resultado(porcentagem));
