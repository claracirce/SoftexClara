var Produto = /** @class */ (function () {
    function Produto(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    // metodo para calcular o desconto
    Produto.prototype.desconto = function (porcentagem) {
        return this.preco * (porcentagem / 100);
    };
    Produto.prototype.resultado = function (porcentagem) {
        var valorDesconto = this.desconto(porcentagem);
        var precoFinal = this.preco - valorDesconto;
        return "".concat(this.nome, " custa R$ ").concat(this.preco.toFixed(2), ". Desconto de ").concat(porcentagem, "%: R$ ").concat(valorDesconto.toFixed(2), ". Pre\u00E7o final: R$ ").concat(precoFinal.toFixed(2), ".");
    };
    return Produto;
}());
//teste
var produto1 = new Produto("colchão", 200);
var porcentagem = 10;
console.log(produto1.resultado(porcentagem));
