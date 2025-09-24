class retangulo {
    constructor(largura, altura){
    this.largura = largura;
    this.altura = altura;

}
    // Método opcional para calcular a área
    calcularArea() {
        return this.largura * this.altura;
    }
    calcularPerimetro(){
        return 2 * (this.largura + this.altura);
    }

    detalhes() {
        return `Largura: ${this.largura}, Altura: ${this.altura}`;
    }
}
// adicionando valores para o retangulo
const ret1 = new retangulo(10, 5);

console.log(ret1.detalhes());                // Largura: 10, Altura: 5
console.log("Área:", ret1.calcularArea());   // Área: 50
console.log("Perímetro:", ret1.calcularPerimetro()); // Perímetro: 303