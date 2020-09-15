window.onload = function(){
    //Declarando variáveis
    let btnNewTask = document.getElementById("criar-tarefa");
    let taskSelect = document.querySelectorAll("li");
    
    //Adicionando evento de colocar o input na lista
    btnNewTask.addEventListener("click", function(){
        //Declarando variáveis participantes do evento
        let textInput = document.getElementById("texto-tarefa");    //Vai receber o texto
        let listMother = document.getElementById("lista-tarefas");  //Declarando node mãe
        let listChild = document.createElement("li");   //Criando elemento lista
        listMother.appendChild(listChild).innerText = textInput.value;  //Adicionado a filha/tarefa na lista ordenada
        textInput.value = "";   //Limpando o campo input
        let li = document.querySelectorAll("li");   //Selecionando as li's criadas
        for(let listIndex = 0; listIndex < li.length; listIndex += 1){
            li[listIndex].addEventListener("click", function(){
                li[listIndex].classList.add("selected");    //Adicionando uma class na li selecionada
                for(let index = 0; index < li.length; index += 1){
                    if(li[index] !== li[listIndex]){
                        li[index].classList.remove("selected"); //Remove a class nas demais li's
                    }
                }
            })
        }    
    });
    
}