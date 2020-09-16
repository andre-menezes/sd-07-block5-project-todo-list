//criar a lista
let listaTarefas = document.querySelector('#lista-tarefas');
let criarTarefaBtn = document.querySelector('#criar-tarefa');
let allItens = '';
let itemSelect = '';
let lineThrough = '';
function criarLi () {
    criarTarefaBtn.addEventListener('click', function () {
        let li = document.createElement('li');
        li.innerText = document.querySelector('#texto-tarefa').value;
        li.addEventListener('click', function () {
            itemSelect = document.querySelector('.selected');            
            if (itemSelect != null) {                
                itemSelect.classList.remove('selected');                
            }
            li.classList.add('selected');
            itemSelect = li;
            //console.log(itemSelect);           
        });
        li.addEventListener('dblclick', function () {
            //lineThrough = document.querySelector('.lineThrough');
            if (li.classList.contains('lineThrough')) {
                li.classList.remove('lineThrough')
            }
            else {
                li.classList.add('lineThrough');
            }
        });
        listaTarefas.appendChild(li);
        document.querySelector('#texto-tarefa').value = '';
    });
}
criarLi();