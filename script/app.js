const container = document.querySelector('#container');
const nomes = ['marcos', 'rosângela', 'alcilene', 'suzana', 'ângela', 'pedro', 'joão', 'érica', 'tomás', 'fernando', 'bruna', 'viviane', 'débora'];
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

nomeEscolhido = escolherNome();
console.log(nomeEscolhido);

function verticalHorizontal () {
    n = Math.floor(Math.random () * orientacao.length);
    return orientacao[n];
}

console.log(verticalHorizontal());

function escolherPosicao () {
    let n = Math.floor(Math.random () * celulas.length);
    return n;
}

posicaoEscolhida = escolherPosicao();
console.log(`Posição escolhida no grid: ${posicaoEscolhida}`);

function coordenadasLetras () {
    nomeEscolhido.forEach((letra, indice) => {
        console.log(celulas[indice * 12 + posicaoEscolhida].innerHTML = letra);
        celulasCertas = indice * 12 + posicaoEscolhida; // Consegui as coordenadas que queria
        //console.log(celulasCertas);
        
    })
    
}

celulasCertas = coordenadasLetras();
console.log(celulasCertas);
/*
    PRÓXIMOS PASSOS: 
    - Verificar se há espaço pra inserir a palavra
    - Caso não haja, escolher outra orientação
    - De alguma forma, colocar cada letra no array de posições correto
*/
