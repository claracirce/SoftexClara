class Calculadora {
    somar(a: number, b: number){
        return a + b;
    }
    subtrair(a: number, b: number): number{
        return a - b;
    }
    multiplicar(a: number, b: number): number{
        return a * b;
}
    dividir(a: number, b: number): number | string{
        if(b === 0) return "Erro: Divisão por zero"
        return a / b;
    }
}

const calc = new Calculadora();

function operar(operacao: string): void {
    const num1 = Number((document.getElementById("num1") as HTMLInputElement).value);
    const num2 = Number((document.getElementById("num2") as HTMLInputElement).value);
    const resultadoDiv = document.getElementById("resultado") as HTMLDivElement;


    let resultado: number | string;

    switch (operacao){
        case "somar":
        resultado = calc.somar(num1, num2);
        break;
        case "subtrair":
        resultado = calc.subtrair(num1, num2);
        break;
        case "multiplicar":
        resultado = calc.multiplicar(num1, num2);
        break;
        case "dividir":
        resultado = calc.dividir(num1, num2);
        break;
        default:
            resultado = "Operação inválida";
    }
    resultadoDiv.innerText = `Resultado ${resultado}`;
}