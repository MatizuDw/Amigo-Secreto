//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Lista de amigos (começa vazia)
const listaDeAmigos = [];

// Seleciona o elemento <ul> da lista de amigos no HTML
let listaNoHtml = document.getElementById('listaAmigos');

// Função para adicionar um novo amigo
function adicionarAmigo() {
    // Pega o valor do campo de texto (input)
    let amigoInput = document.querySelector('input');
    let nomeAmigo = amigoInput.value;

    // Verifica se o campo não está vazio
    if (nomeAmigo == '') {
        alert("Por favor, digite o nome do amigo.");
        return; // Para a execução da função se o campo estiver vazio
    } else {

    // Adiciona o amigo ao array em JavaScript
    listaDeAmigos.push(nomeAmigo);

    // Limpa o campo de texto para o próximo nome
    amigoInput.value = '';
    
    // Devolve o foco para o campo de texto
    amigoInput.focus();

    // Chama a função para mostrar a lista atualizada na tela
    atualizarListaNaTela();
    }
};



// Função para exibir a lista de amigos no HTML
function atualizarListaNaTela() {
    // 1. Limpa a lista que está no HTML para não duplicar os nomes
    listaNoHtml.innerHTML = '';

    // 2. Cria os itens <li> para cada amigo na lista e os insere no HTML
    for (let i = 0; i < listaDeAmigos.length; i++) {
        // Cria um elemento <li>
        let item = document.createElement('li');
        // Define o texto do elemento como o nome do amigo
        item.textContent = listaDeAmigos[i];
        // Adiciona o <li> como filho da <ul> no HTML
        listaNoHtml.appendChild(item);
    }
};


function sortearAmigo() {
    // Verifica se há amigos suficientes para o sorteio
    if (listaDeAmigos.length < 2) {
        alert('Adicione pelo menos 2 amigos para realizar o sorteio!');
        return; // Para a execução da função
    }

    // Pega a referência do local onde o resultado será exibido
    const resultadoNoHtml = document.getElementById('resultado');

    // 1. Gera um número aleatório entre 0 e o número de amigos na lista - 1
    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);

    // 2. Usa o índice gerado para selecionar o nome do amigo sorteado
    const amigoAleatorio = listaDeAmigos[indiceAleatorio];

    // 3. Exibe o resultado no HTML
    resultadoNoHtml.innerHTML = `O amigo sorteado foi: <strong>${amigoAleatorio}</strong>.`;

    console.log(amigoAleatorio);
};
