document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btnCalcular");

    btn.addEventListener("click", () => {
        let num1 = Number(document.getElementById("num1").value);
        let num2 = Number(document.getElementById("num2").value);
        let res = document.getElementById("res");

         if(isNaN(num1) || isNaN(num2)){
            alert(`Erro! Por favor digite dois valores numéricos!`)
            return; }

        if (num1 > num2){
            res.innerHTML = `<strong>${num1}</strong> é maior que ${num2}<br>`; 
            res.innerHTML += `${num2} é menor que <strong>${num1}</strong>`;

        } else if(num1 == num2){
            res.innerHTML = `${num1} e ${num2} são iguais!`;
           
        }
        else{
            res.innerHTML = `${num2} é maior que ${num1}<br>`;
            res.innerHTML += `${num1} é menor que <strong>${num2}</strong>`;
            
            
        } 

        
    });
});