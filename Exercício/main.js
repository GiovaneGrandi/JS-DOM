//( () => {
    import BotaoConclui from "./componentes/concluiTarefa.js";
    import BotaoDeleta from "./componentes/deletaTarefa.js";

    const criarTarefa = (evento)=> {

        evento.preventDefault();

        const lista = document.querySelector("[data-list]");
        const input = document.querySelector("[data-form-input]");
        const valor = input.value;
    
        const tarefa = document.createElement("li"); //Código que cria uma li no HTML
        tarefa.classList.add("task"); //Adiciona uma classe para a li no CSS

        const conteudo = `<p class="content">${valor}</p>`; //Código que cria o parágrafo com o input adicionado pelo usuário

        tarefa.innerHTML = conteudo;

        tarefa.appendChild(BotaoConclui());
        tarefa.appendChild(BotaoDeleta());
        lista.appendChild(tarefa); //código que adiciona a li dentro da ul no html
        input.value=" ";           //A tarefa vai sempre ser colocada em último lugar  pelo DOM
    }

    const novaTarefa = document.querySelector("[data-form-button]");
    //o querySelector serve para localizar uma função específica do código e a info data- seria o equivalente da class do CSS porém para o JS

    novaTarefa.addEventListener("click", criarTarefa); //O código que avisará quando houver um clique no botão

//})();
//Função anônima que encorpa todo o código para evitar que o JS seja acessado de fora