const BotaoConclui = () => { //Componente começa com letra maiuscula
    const botaoConclui = document.createElement("button");

    botaoConclui.classList.add("check-button");
    botaoConclui.innerText = "Concluir"; //Adiciona um texto ao botão
    botaoConclui.addEventListener("click", concluirTarefa);

    return botaoConclui;
}

const concluirTarefa = (evento) => {
    const botaoConclui = evento.target; //Aqui indicamos qual elemento foi clicado
    const tarefaCompleta = botaoConclui.parentElement; //Selecionando o pai do botaoConclui, no caso, a li
    tarefaCompleta.classList.toggle("done"); //Executa a classe CSS no pai para aplicar o estilo desejado assim que o evento for acionado (clique no botão)
}

export default BotaoConclui;
//Exportar os arquivos para criar módulos e então proteger o código