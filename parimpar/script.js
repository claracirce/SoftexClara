// matriz par e impar
document.addEventListener('DOMContentLoaded',() => {
let res = document.getElementById('res');
let btnCalcular = document.getElementById('btnVerificar');


btnVerificar.addEventListener('click',() => {
    let entrada = document.getElementById("numeros").value;
    // separa os números por vírgula ou epaço
    let lista = entrada.split(/[\s,]+/).map(Number);
    // validação
    if (lista.length !== 10 || lista.some(isNaN)){
        alert("Erro, digite extamente 10 números válidos, separados por vírgula ou espaço");
    }

    let pares = [];
    let impares = [];
    


    for (let i = 0; i < lista.length; i++){
        if (lista[i] % 2 == 0){
            pares.push(lista[i]);
        }else {
            impares.push(lista[i]);
        } }


    res.innerHTML = `Numeros pares: ${pares}`;
    res.innerHTML += `Numeros impares: ${impares}`;
    });
});
