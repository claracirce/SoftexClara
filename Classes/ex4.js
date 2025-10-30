class ContaBancaria {
    #saldo = 0; // atributo privado 

    depositar(valor){
        if (valor > 0){
            this.#saldo += valor;
            console.log(`Depósito de R$$ ${valor.toFixed(2)} realizado com sucesso.`);
        }else{
            console.log(`Valor de depósito inválido`);
        }
    }

    sacar(valor){
        if (valor > 0 && valor <= this.#saldo){
            this.#saldo -= valor;
            console.log(`Saque de R$$ ${valor.toFixed(2)} realizado com sucesso.`);
        }else {
            console.log(`Saldo insuficiente ou valor inválido`);
        }
    }
    verSaldo(){
        console.log(`Saldo atual: R$$ ${this.#saldo.toFixed(2)}`);
        return this.#saldo;
    }
}
// testendo
const conta = new ContaBancaria();
conta.depositar(100);
conta.sacar(30);
conta.verSaldo();