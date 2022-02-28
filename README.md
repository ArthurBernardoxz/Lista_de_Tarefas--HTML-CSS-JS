# Lista_de_Tarefas--HTML-CSS-JS
Lista de Tarefas utilizando  **CSS**, **HTML** e **CSS**.

## Como foi feito a estrutura? (HTML) ##

A estrutura do site foi feita de forma bem simples, se sua preucupação for com linhas de códigos também ficou bem pequeno.

Utilizei um `<h1>` para colocar o titulo do site, logo depois criei uma `<div>` para criar o bloco onde ficaria a lista funcionando, dentro dele coloquei um `<input>` para pegar o nome da tarefa que o usuário deseja cadastrar, um `<button>` para adicionar um callback depois utilizando o **JavaScript** e por último criei uma `<ul>` vazia onde seriam adicionas as tarefas depois.

## Como foi feito a estilização? (CSS) ##

Tentei deixar a aparência do site o mais próximo de uma lista de tarefas feita normalmente em uma folha de papel. 

Primeiro inclui a fonte [**Shizuru**](https://fonts.google.com/specimen/Shizuru?query=Shizuru) utilizando o `@import url('https://fonts.googleapis.com/css2?family=Shizuru&display=swap')`, logo depois defini o `background-color` do html como `aliceblue` e também a `font-family` como `'Shizuru', cursive`.

Defini o tamanho das fontes e dos outros elementos de forma que ficasse o mais agradavel ao meu ponto de vista e alinhando tudo ao centro da página.

Para deixar a linha horizontal a baixo de cada tarefa mudei as de cada li deixando apenas a `border-bottom` de fora e funcionou da seguinte forma:

```
border-style: solid;
border-top: 50px;
border-right: 50px;
border-left: 50px;
```

Para saber mais acesse o arquivo **index.css** acredito que está bem simples e de facil entendimento.

## Como você fez funcionar e qual foi a lógica? (Js) ##

### Adicionar Tarefas: ###

Criei uma váriavel para receber o botão **ADD**(para adicionar tarefas) e adicionei um evento nele de `click` e o vinculei a função **adicionar_Tarefa**.

Já dentro da função criei uma váriavel chamada **Tarefa_ADD** que receberia o nome da tarefa digitada pelo usuário dentro do `input`, logo em seguida utilizei um `if` para verificar se o usuário está tentando adicionar uma tarefa sem nome, que mostra ao usuário um `window.alert` dizendo que não é póssivel adicionar uma tarefa sem nome. 

Ainda na função criei dois botões atráves do `document.createElement('button')` em ambos coloquei a `class` **botões** para ficar mais fácil de estilizar no CSS, mas em um coloquei o `innerHTML = "✔️"` e a `class` de **pronto** e o outro com o `innerHTML = "🗑️"` e a `class` de **excluir** um seria utilizado para marcar a tarefa como feita e outro para excluir tarefas.

Depois criei um `li` que receberia no `innerHTML` o valor o nome da tarefa e utilizando o `appendChild` adicionaria os botões de pronto e excluir que seriam utilizados depois, também utilizando o `appendChild` o `li` seria adicionado naquele `ul` que estava vazio.

Ao final pego todos os botões de `class` **pronto** utilizando um `document.querySelectorAll('.pronto')` e adiciono um callback neles para ligar a função **Tarefa_feita**, fiz o mesmo com os botões de `class` **excluir** e os liguei da mesma forma a função **Excluir_Tarefa**, por último salvo a lista de tarefas (a `div` no **LocalStorage**) para quando o site for aberto novamente consiga pegar as tarefas adicionadas pelo usuário anteriormente.

### Excluir Tarefas: ###

Utilizando o `currentTarget` pego em qual dos botões com `class` **excluir** foi pressionado para excluir o `li` (tarefa) naquela posição utilizando o `parentNode.remove` do `parentNode.remove` do botão que foi selecionado da seguinte forma:

```
function Excluir_Tarefa(e) { // funcao para excluir a tarefa
    botao_selecionado = e.currentTarget; // pega qual botao foi selecionado
    botao_selecionado.parentNode.remove(botao_selecionado.parentNode); // remove o <li> que teve o botao pressionado
    Salvar(lista_Tarefas.innerHTML); // salva a lista
}
```

### Excluir Tarefas: ###

Utilizando o `currentTarget` pego em qual dos botões com `class` **pronto** foi pressionado para marcar o `li` (tarefa) naquela posição como feito.

Para isso atráves do `class.list.toggle("riscado")` que no CSS define que deixa os elementos com essa `class` ~~riscados~~.

### Salvar as Tarefas: ###



