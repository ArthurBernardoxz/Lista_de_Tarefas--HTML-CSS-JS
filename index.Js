// Declaração de algumas variáveis
let botao_tarefa_feita; // variavel para o botao com "✔️" (marcar a tarefar como pronta)
let botao_tirar_tarefa; // variavel para o botao com "🗑️" (excluir tarefa)
let lista_Tarefas = document.querySelector("#tarefas_add"); // variavel para pegar o <ul> que irá conter as <li> de cada tarefa (corpo da lista)
let Botao_ADD = document.querySelector("#add"); //variavel para pegar o botao "ADD" (adicionar tarefas)
let li_para_tarefa; // variavel que recebera a nova tarefa a ser adicionada na tarefa

Botao_ADD.addEventListener('click', adicionar_Tarefa); // adiciona um evento para o botao ADD ligando a função adicionar_Tarefa()

Carregar(lista_Tarefas); //Carrega a lista salva no ssesionstorage



function adicionar_Tarefa() { // funcao para adicionar tarefa
    let Tarefa_ADD = document.querySelector("#Input_Tarefas").value; // declaração da variavel para pegar o valor do input para digitar o nome da tarefa

    if(Tarefa_ADD == ""){ // condicao para verificar se o usuario está tentando adicionar uma tarefa sem nome
        window.alert("NÃO É PÓSSIVEL ADICIONAR UMA TAREFA SEM NOME"); // mostra na tela um alerta dizendo que não é possivel adicionar uma tarefa sem nome 
        return;
    }
    //criacao e alteracao do botao para tarefa feita
    botao_tarefa_feita = document.createElement('button'); // cria um elemento html <button> e o atribui a variavel para o botao de tarefa de feita
    botao_tarefa_feita.innerHTML = "✔️"; // esse botao recebe no html o "valor" de emoji ✔️
    botao_tarefa_feita.classList.add("botoes"); // adiciona a classe .botoes ao botao para ficar mais de estilizalo no CSS
    botao_tarefa_feita.classList.add("pronto"); // adiciona a classe .pronto ao botao para depois conseguir adicionar eventos a ele (apenas para diferenciar dos outros)
    //criacao e alteracao do botao para tirar tarefa
    botao_tirar_tarefa = document.createElement('button');  //cria um elemento html <button> e o atribui a variavel para o botao para tirar tarefas
    botao_tirar_tarefa.innerHTML = "🗑️"; // esse botao recebe no html o "valor" de emoji 🗑️
    botao_tirar_tarefa.classList.add("botoes"); // adiciona a classe .botoes ao botao para ficar mais de estilizalo no CSS
    botao_tirar_tarefa.classList.add("excluir"); // adiciona a classe adiciona a classe .excluir ao botao para depois conseguir adicionar eventos a ele (apenas para diferenciar dos outros)

    li_para_tarefa = document.createElement('li'); // atribui ao li_tarefa a criação de um elemento HTML <li>
    li_para_tarefa.innerHTML = "📌"+ Tarefa_ADD + " " + " " + " "; // ele recebe o emoji de pin o valor do input digitado pelo usario e 3 espaços para depois colocar os botões de pronto e excluir no <li>

    lista_Tarefas.appendChild(li_para_tarefa); //adiciona o <li> logo depois do ultimo elemento da lista da lista de tarefas

    li_para_tarefa.appendChild(botao_tarefa_feita); // adiciona ao <li> o botao para tarefa feita
    li_para_tarefa.appendChild(botao_tirar_tarefa); // adiciona ao <li> o botao para tirar tarefa

    botao_tarefa_feita = document.querySelectorAll('.pronto');  // ele recebe todos botoes de pronto
    botao_tirar_tarefa = document.querySelectorAll('.excluir'); // recebe todos os botoes de excluir

    // for para adicionar um evento para cada botao de tarefa feita
    for(i = 0; i < botao_tarefa_feita.length; i++){
        botao_tarefa_feita[i].addEventListener('click', Tarefa_Feita);
    }
    // for para adicionar um evento para cada botao de excluir tarefa
    for(i = 0; i < botao_tarefa_feita.length; i++){
        botao_tirar_tarefa[i].addEventListener('click', Excluir_Tarefa);
    }

    Salvar(lista_Tarefas.innerHTML); // salva a lista a cada tarefa adicionada
}


function Tarefa_Feita(e) { // funcao para marcar tarefa como feita
    botao_selecionado = e.currentTarget; // pega qual botao foi pressionado
    botao_selecionado.parentNode.classList.toggle("riscado"); // adiciona a classe .riscado ao <li> que teve o botao pressionado
    Salvar(lista_Tarefas.innerHTML); // salva a lista
    
}

function Excluir_Tarefa(e) { // funcao para excluir a tarefa
    botao_selecionado = e.currentTarget; // pega qual botao foi selecionado
    botao_selecionado.parentNode.remove(botao_selecionado.parentNode); // remove o <li> que teve o botao pressionado
    Salvar(lista_Tarefas.innerHTML); // salva a lista
}

function Salvar(lista) { // funcao para salvar a lista no sessionstorage
    sessionStorage.setItem('tarefas', lista); //coloca em tarefas a lista com as <li> no sessionstorage
}

function Carregar(lista) { //funcao para carregar as tarefas salvas
    lista.innerHTML = sessionStorage.getItem('tarefas'); // a lista no HTML recebe as tarefas salvas no sessionstorage
    botao_tarefa_feita = document.querySelectorAll('.pronto'); //pega novamente os botoes que possuem a classe pronto 
    botao_tirar_tarefa = document.querySelectorAll('.excluir'); //pega novamente os botoes que possuem a classe excluir
    for(i = 0; i < botao_tarefa_feita.length; i++){ // atribui eventos aos botoes para tarefas feitas
        botao_tarefa_feita[i].addEventListener('click', Tarefa_Feita);
    }
    for(i = 0; i < botao_tarefa_feita.length; i++){ // atribui eventos aos botoes para excluir tarefas
        botao_tirar_tarefa[i].addEventListener('click', Excluir_Tarefa);
    }
}