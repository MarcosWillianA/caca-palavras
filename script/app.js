const container = document.querySelector('#container');
const nomes = ['marcos', 'rosângela', 'alcilene', 'suzana', 'ângela'];
const letrasDoAlfabeto = ['a', 'b', 'c', 'ç', 'd', 'e']
const orientacao = ['vertical', 'horizontal'];

function criarGrid () {
    for (i = 0; i < 144; i++) {
        const celulas = document.createElement('div');
        container.appendChild(celulas);
        celulas.classList.add('celulas');
    }
}

criarGrid();
const celulas = document.querySelectorAll('.celulas');

// Palavras 

function escolherNome () {
    let n = Math.floor(Math.random () * nomes.length);
    arrayDeLetras = nomes[n].split('');
    return arrayDeLetras;
}

console.log(escolherNome());

function verticalHorizontal () {
    n = Math.floor(Math.random () * orientacao.length);
    return orientacao[n];
}

console.log(verticalHorizontal());

function escolherPosicao () {
    let n = Math.floor(Math.random () * celulas.length);
    return n;
}

console.log(escolherPosicao());

function inserirNome(nome) {
    nome = escolherNome();
    celulas.forEach((celula, index) => {
        index = escolherPosicao();
        celula[index].innerHTML = nome[0]
    })
}