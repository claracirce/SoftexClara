document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btnCalcular");

    btn.addEventListener("click", () => {
        let num1 = Number(document.getElementById("num1").value);
        let num2 = Number(document.getElementById("num2").value);
        let num3 = Number(document.getElementById("num3").value);
        let res = document.getElementById("res");

         if(isNaN(num1) || isNaN(num2) || isNaN(num3)){
            alert(`Erro! Por favor digite dois valores numéricos!`)
            return; }

        const maior = Math.max(num1, num2, num3);
        const menor = Math.min(num1, num2, num3);
        //função math min e math max identificam o menor e maior numero.

         if(num1 == num2 && num1 == num3){
            res.innerHTML = `${num1}, ${num2} e ${num3} são iguais!`;
           
        }else {
            res.innerHTML = `<strong>${maior}</strong> é o maior número!<br>`;
            res.innerHTML += `<strong>${menor}</strong> é o menor número!`
        }
        
      

        
    });
});