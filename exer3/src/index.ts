class Produto {
    nome: string;
    preco: number;
   
    constructor(nome:string, preco: number) {
    this.nome = nome;
    this.preco = preco;
}

   // metodo para calcular o desconto
   desconto(porcentagem: number): number {
    return this.preco * (porcentagem / 100);
   }

   resultado(porcentagem: number): string {
    const valorDesconto = this.desconto(porcentagem);
    const precoFinal = this.preco - valorDesconto;

    return `${this.nome} custa R$ ${this.preco.toFixed(2)}. Desconto de ${porcentagem}%: R$ ${valorDesconto.toFixed(2)}. Preço final: R$ ${precoFinal.toFixed(2)}.`;
   }

    }

//teste

const produto1 = new Produto("colchão", 200);
const porcentagem = 10;

console.log(produto1.resultado(porcentagem));

