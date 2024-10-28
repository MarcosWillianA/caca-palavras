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
    const nomesEscolhidos = [];
    const nomesDisponiveis = [...nomes];
    while (nomesEscolhidos.length < 4 && nomesDisponiveis.lenght > 0) {
        let n = Math.floor(Math.random() * nomesDisponiveis.length);
        nomesEscolhidos.push(nomesDisponiveis[n]);
        nomesDisponiveis.splice(n, 1);
    }
    
    return nomesEscolhidos.map(nome => nome.split(''));

}

let nomesEscolhidos = escolherNome();
console.log(nomesEscolhidos);

function verticalHorizontal () {
    n = Math.floor(Math.random () * orientacao.length);
    return orientacao[n];
}

let orientacaoLetras = verticalHorizontal();
console.log(orientacaoLetras);

function escolherPosicao () {
    return Math.floor(Math.random () * celulas.length);
}

posicaoEscolhida = escolherPosicao();
console.log(`Posição escolhida no grid: ${posicaoEscolhida}`);

function coordenadasLetras() {
    let coordenadas = [];
    let dentroDoGrid = false;

    while (!dentroDoGrid) {
        coordenadas = [];
        let posicaoEscolhida = escolherPosicao();

        switch (orientacaoLetras) {
            case 'vertical':
                for (let indice = 0; indice < nomesEscolhidos.length; indice++) {
                    const nomeAtual = nomesEscolhidos[indice];
                    for (let letraIndice = 0; letraIndice < nomeAtual.lenght; letraIndice++) {
                        const celulasCertas = indice * 12 + posicaoEscolhida; // Obter as coordenadas
                        coordenadas.push(celulasCertas);
                        console.log(coordenadas);
                    }
                }
                dentroDoGrid = coordenadas.every(coordenada => coordenada <= 143);
                break;
    
            case 'horizontal': 
                for (let indice = 0; indice < nomesEscolhidos.length; indice++) {
                    const nomeAtual = nomesEscolhidos[indice];
                    for (let letraIndice = 0; letraIndice < nomeAtual.length; letraIndice++) {
                        const celulasCertas = indice + posicaoEscolhida;
                        coordenadas.push(celulasCertas);
                        console.log(coordenadas);
                    }
                }
                dentroDoGrid = coordenadas.every(coordenada => coordenada % 12 !== 0 && coordenada < 144);
                break;
    
            case 'diagonal':
                for (let indice = 0; indice < nomesEscolhidos.length; indice++) {
                    const nomeAtual = nomesEscolhidos[indice]; 
                    for (let letraIndice = 0; letraIndice < nomeAtual.length; letraIndice++) {
                        const celulasCertas = indice * 13 + posicaoEscolhida; 
                        coordenadas.push(celulasCertas);
                        console.log(coordenadas);
                    }
                }
                dentroDoGrid = coordenadas.every(coordenada => coordenada <= 143 && coordenada % 12 !== 0);
                break;
        }

        if (dentroDoGrid) {
            for (let indice = 0; indice < nomeEscolhido.length; indice++) {
                const letra = nomeEscolhido[indice];
                const celulasCertas = coordenadas[indice];

                if (celulas[celulasCertas]) {
                    celulas[celulasCertas].innerHTML = letra;
                    console.log('Letra acrescentada');
                } 
            }
        } else {
            console.log('Não tem espaço, sorteie de novo!');
        }
    }
}

coordenadasLetras();


