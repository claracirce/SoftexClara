// Tabuada
document.addEventListener('DOMContentLoaded',() => {
let res = document.getElementById('res');
let btnCalcular = document.getElementById('btnCalcular');


btnCalcular.addEventListener('click',() => {
    let n = Number(document.getElementById("n").value);

    if (isNaN(n)){
        alert("Erro, insira um número válido!");
        return;

        
    } 
    res.innerHTML = ""; //limpa antes de gerar a nova tabuada.
    for (let i = 1; i <= 10; i++){
     res.innerHTML += `Tabuada: ${n} x ${i} = ${n * i}<br>`;

}
    
    });
});
