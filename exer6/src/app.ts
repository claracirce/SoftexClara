class Pessoa {
    nome: string;

    constructor(nome: string){
        this.nome = nome;
    }
}
    document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btnApresentar") as HTMLButtonElement | null;
    if (!btn){
        console.error("Botão não encontrado");
        return;
    }


const pessoa = new Pessoa ("Clara");

btn.addEventListener("click", () =>{
    btn.textContent = `Olá, meu nome é ${pessoa.nome}`;

});
    });


