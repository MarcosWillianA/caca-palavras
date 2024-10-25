const container = document.querySelector('#container');
const nomes = ['marcos', 'rosângela', 'alcilene', 'suzana', 'ângela'];
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

/* function espacoDisponivel () {
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
            if (nomeEscolhido.forEach((letra, indice) => {
                indice + 1 + (posicaoEscolhida + 1) % 12 === 0   
            })) {
                return true;
            } else {
                return false;
            }
    }
} 

espacoDisponivel();
espacoLivre = espacoDisponivel();
console.log(espacoLivre);
*/

function coordenadasLetras() {
    switch (orientacaoLetras) {
        case 'vertical':
            for (let indice = 0; indice < nomeEscolhido.length; indice++) {
                const letra = nomeEscolhido[indice];
                const celulasCertas = indice * 12 + posicaoEscolhida; // Obter as coordenadas
                console.log(celulasCertas);
                
                if (celulasCertas > 143) {
                    escolherPosicao(); // Chama a função caso a coordenada seja maior que 143
                    return; // Para a execução da função coordenadasLetras
                }
                
                celulas[celulasCertas].innerHTML = letra; // Adiciona a letra se estiver dentro do limite
                console.log('Letra acrescentada!');
            }
        break;

        case 'horizontal': 
            for (let indice = 0; indice < nomeEscolhido.length; indice++) {
                const letra = nomeEscolhido[indice];
                const celulasCertas = indice + 1 + posicaoEscolhida;
                console.log(celulasCertas);

                if (celulasCertas % 12 === 0) {
                    escolherPosicao();
                    return;
                }

                celulas[celulasCertas].innerHTML = letra;
                console.log('Letra acrescentada');
            }
    }
    
}


celulasCertas = coordenadasLetras();


/*
    PRÓXIMOS PASSOS: 
    - Verificar se há espaço pra inserir a palavra
    - Caso não haja, escolher outra orientação
    - De alguma forma, colocar cada letra no array de posições correto
    - Ideia = primeiro a verificação: a lógica:
        celulas[indice * 12 + posicaoEscolhida].innerHTML = letra;
        pode ser colocada numa outra função feita apenas pra colocar as letras
    - OUTRA IDEIA: COLOCAR CELULAS CERTAS NUM ARRAY E ENTÃO FAZER O CHECK DE EVERY. 
      SE O CHECK FOR FALSO, ENTÃO ELE IRÁ SORTEAR OUTRA POSIÇÃO 

    - OUTRA IDEIA: SE AS COORDENADAS DE CADA PALAVRA FICAREM ARMAZENADAS NUM ARRAY, 
    ENTÃO É POSSÍVEL VERIFICAR SE ELAS TEM A MESMA LETRA 
    E então poderem ficar uma por cima da outra
*/
