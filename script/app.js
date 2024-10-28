const container = document.querySelector('#container');
const nomes = ['marcos', 'rosângela', 'alcilene', 'suzana', 'ângela'];
const alfabeto = [
    'a', 'á', 'ã', 'â', 'b', 'c', 'ç', 'd', 'e', 'é', 'ê', 'f', 
    'g', 'h', 'i', 'í', 'j', 'k', 'l', 'm', 'n', 'o', 'ó', 'ô', 
    'õ', 'p', 'q', 'r', 's', 't', 'u', 'ú', 'v', 'w', 'x', 'y', 'z'
  ];
const orientacao = ['vertical', 'horizontal', 'diagonal'];

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
    const coordenadas = [];
    let dentroDoGrid = true;

    switch (orientacaoLetras) {
        case 'vertical':
            for (let indice = 0; indice < nomeEscolhido.length; indice++) {
                const letra = nomeEscolhido[indice];
                const celulasCertas = indice * 12 + posicaoEscolhida; // Obter as coordenadas
                coordenadas.push(celulasCertas);
                console.log(coordenadas);
            }

            dentroDoGrid = coordenadas.every(coordenada => coordenada <= 143);
        break;

        case 'horizontal': 
            for (let indice = 0; indice < nomeEscolhido.length; indice++) {
                const letra = nomeEscolhido[indice];
                const celulasCertas = indice + 1 + posicaoEscolhida;
                coordenadas.push(celulasCertas);
                console.log(coordenadas);
            }

            dentroDoGrid = coordenadas.every(coordenada => coordenada % 12 !== 0)
        break;

        case 'diagonal':
            for (let indice = 0; indice < nomeEscolhido.length; indice++) {
                const letra = nomeEscolhido[indice];
                const celulasCertas = indice * 13 + posicaoEscolhida; 
                coordenadas.push(celulasCertas);
                console.log(coordenadas);
            }

            dentroDoGrid = coordenadas.every(coordenada => coordenada <= 143 && coordenada % 12 !== 0);
        break;
    }

    if (!dentroDoGrid) {
        console.log('NÃO TEM ESPAÇO, SORTEIE DE NOVO');
        escolherPosicao();
        coordenadasLetras();
    } 
}

celulasCertas = coordenadasLetras();

/*
function letrasAleatorias() {
    celulas.forEach(celula => {
        celula.innerHTML = alfabeto[Math.floor(Math.random() * alfabeto.length)];
    });
}

letrasAleatorias();
*/



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
    - INSIGHT QUE TIVE SEXTA-FEIRA: O cálculo da diagonal e "antidiagonal". + 13 e + 11 respectivamente
*/
