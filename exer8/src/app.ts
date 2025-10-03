document.addEventListener("DOMContentLoaded", () => {
const inputTarefa = document.getElementById("inputTarefa") as HTMLInputElement;
const btnAdicionar = document.getElementById("btnAdicionar") as HTMLButtonElement;
const listaTarefas = document.getElementById("listaTarefas") as HTMLUListElement;

btnAdicionar.addEventListener("click", () => {
    const texto = inputTarefa.value.trim();

    if (texto === ""){
        alert("Por favor, digite uma tarefa");
        return;
    }
    const li = document.createElement("li");
    li.textContent = texto;

    const btnConcluir = document.createElement("button");
    btnConcluir.textContent = "Concluir";
    btnConcluir.classList.add("btnConcluir");

    btnConcluir.addEventListener("click", () =>{
        li.classList.toggle("concluida");
    });

    li.appendChild(btnConcluir);
    listaTarefas.appendChild(li);

    inputTarefa.value = "";
    inputTarefa.focus();
});

inputTarefa.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        btnAdicionar.click();
    }

    });
});