let botao_pronto;
let botao_excluir;
let lista_Tarefas;
Botao_ADD = document.querySelector("#add");

Botao_ADD.addEventListener('click', adicionar_Tarefa);

Carregar(lista_Tarefas);

function adicionar_Tarefa() {
    Tarefa_ADD = document.querySelector("#Input_Tarefas").value;
    if(Tarefa_ADD == ""){
        window.alert("NÃO É PÓSSIVEL ADICIONAR UM TAREFA SEM NOME");
        return;
    }
    botao_tarefa_feita = document.createElement('button');
    botao_tarefa_feita.innerHTML = "✔️";
    botao_tarefa_feita.classList.add("botoes");
    botao_tarefa_feita.classList.add("pronto");
    botao_tirar_tarefa = document.createElement('button');
    botao_tirar_tarefa.innerHTML = "🗑️";
    botao_tirar_tarefa.classList.add("botoes");
    botao_tirar_tarefa.classList.add("excluir");

    novo_li = document.createElement('li');

    novo_li.innerHTML = "📌"+ Tarefa_ADD + " " + " " + " ";
    lista_Tarefas.appendChild(novo_li);  
    novo_li.appendChild(botao_tarefa_feita);
    novo_li.appendChild(botao_tirar_tarefa);
    botao_pronto = document.querySelectorAll('.pronto');
    for(i = 0; i < botao_pronto.length; i++){
        botao_pronto[i].addEventListener('click', Tarefa_Feita);
    }
    botao_excluir = document.querySelectorAll('.excluir');
    for(i = 0; i < botao_pronto.length; i++){
        botao_excluir[i].addEventListener('click', Excluir_Tarefa);
    }

    Salvar(lista_Tarefas.innerHTML);
}


function Tarefa_Feita(e) {
    botao_selecionado = e.currentTarget;
    botao_selecionado.parentNode.classList.toggle("riscado");
    
}

function Excluir_Tarefa(e) {
    botao_selecionado = e.currentTarget;
    botao_selecionado.parentNode.remove(botao_selecionado.parentNode);
}

function Salvar(lista) {
    sessionStorage.setItem('tarefas', lista);
}

function Carregar(lista) {
    lista = sessionStorage.getItem('tarefas');
    console.log(lista);
}