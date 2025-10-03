document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btnCalcular");

    btn.addEventListener("click", () => {
        let num1 = Number.parseFloat(document.getElementById("num1").value);
        let num2 = Number.parseFloat(document.getElementById("num2").value);
        let num3 = Number.parseFloat(document.getElementById("num3").value);
        let res = document.getElementById("res");
        let media = (num1 + num2 + num3) /3;

        if (isNaN(num1) || isNaN(num2) || isNaN(num3)){
            alert("Digite um valor numérico!");
            return;
        }

        if(media >= 7){
            res.innerHTML = `Sua média é ${media.toFixed(2)}. Aprovado`;
        } else if (media >= 5){
            res.innerHTML = `Sua média é ${media.toFixed(2)}. Recuperação`;
        }else{
            res.innerHTML = `Sua média é ${media.toFixed(2)}. Reprovado`;
        } // toFixed(2) serve pra mostar a média com duas casas decimais

            });
});