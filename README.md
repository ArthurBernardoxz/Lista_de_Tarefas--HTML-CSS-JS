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

Já dentor da função criei uma váriavel chamada **Tarefa_ADD** que receberia o nome da tarefa digitada pelo usuário dentro do `input`, logo em seguida utilizei um `if` para verificar se o usuário está tentando adicionar uma tarefa sem nome, que mostra ao usuário um `window.alert` dizendo que não é póssivel adicionar uma tarefa sem nome.


