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

orientacaoLetras = verticalHorizontal();
console.log(orientacaoLetras);

function escolherPosicao () {
    let n = Math.floor(Math.random () * celulas.length);
    return n;
}

posicaoEscolhida = escolherPosicao();
console.log(`Posição escolhida no grid: ${posicaoEscolhida}`);

function espacoDisponivel () {
    console.log(`Número de letras: ${nomeEscolhido.length} e a orientação é ${orientacaoLetras}`);
    switch (orientacaoLetras) {
        case 'vertical':
            if (nomeEscolhido.forEach((letra, indice) => {
                indice * 12 + posicaoEscolhida <= 143
            })) {
                return true;
            } else {
                return false;
            }

        case 'horizontal':
            
    }
}

espacoDisponivel();

function coordenadasLetras () {
    nomeEscolhido.forEach((letra, indice) => {
        celulas[indice * 12 + posicaoEscolhida].innerHTML = letra;
        celulasCertas = indice * 12 + posicaoEscolhida; // Consegui as coordenadas que queria
        //console.log(celulasCertas);
    })
}

celulasCertas = coordenadasLetras();

/*
    PRÓXIMOS PASSOS: 
    - Verificar se há espaço pra inserir a palavra
    - Caso não haja, escolher outra orientação
    - De alguma forma, colocar cada letra no array de posições correto
*/
