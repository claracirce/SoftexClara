// matriz maior e menor
document.addEventListener('DOMContentLoaded',() => {
let res = document.getElementById('res');
let btnCalcular = document.getElementById('btnCalcular');


btnCalcular.addEventListener('click',() => {
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);
    let n3 = Number(document.getElementById("n3").value);
    let n4 = Number(document.getElementById("n4").value);
    let n5 = Number(document.getElementById("n5").value);

    if (isNaN(n1) || isNaN(n2) ||isNaN(n3) || isNaN(n4) || isNaN(n5)){
        alert("Erro, insira um número válido!");
        return;
    }
    let lista = [n1, n2, n3, n4, n5];
    let maior = lista[0];
    let menor = lista[0];

    for (let i = 0; i < lista.length; i++){

if (lista[i] > maior){
    maior = lista[i];

}if (lista[i] < menor){
    menor = lista[i];
}
}

    res.innerHTML = `Esse é o maior valor: ${maior}`;
    res.innerHTML += `Esse é o menor valor: ${menor}`;
    });
});

