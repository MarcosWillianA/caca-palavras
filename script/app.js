const container = document.querySelector('#container');
const nomes = ['marcos', 'rosângela', 'alcilene', 'suzana', 'ângela'];
const orientacoes = ['vertical', 'horizontal', 'diagonal'];

function criarGrid() {
    for (let i = 0; i < 144; i++) {
        const celulas = document.createElement('div');
        container.appendChild(celulas);
        celulas.classList.add('celulas');
    }
}

criarGrid();
const celulas = document.querySelectorAll('.celulas');

// Função para escolher 4 nomes únicos
function escolherNomes() {
    const nomesEscolhidos = [];
    const nomesDisponiveis = [...nomes];

    while (nomesEscolhidos.length < 4 && nomesDisponiveis.length > 0) {
        let n = Math.floor(Math.random() * nomesDisponiveis.length);
        nomesEscolhidos.push(nomesDisponiveis[n]);
        nomesDisponiveis.splice(n, 1);
    }

    return nomesEscolhidos.map(nome => nome.split('')); // Converte cada nome em um array de letras
}

let nomesEscolhidos = escolherNomes();
console.log('Nomes escolhidos:', nomesEscolhidos);

function verticalHorizontalDiagonal() {
    return orientacoes[Math.floor(Math.random() * orientacoes.length)];
}

function escolherPosicao() {
    return Math.floor(Math.random() * celulas.length);
}

function verificarConflito(coordenadas, nome) {
    for (let i = 0; i < coordenadas.length; i++) {
        const coordenada = coordenadas[i];
        const letraAtual = nome[i];

        if (celulas[coordenada].innerHTML !== '' && celulas[coordenada].innerHTML !== letraAtual) {
            return false; // Há conflito
        }
    }
    return true; // Sem conflito
}

function inserirPalavra(nome) {
    let coordenadas = [];
    let posicaoEscolhida;
    let orientacaoLetras;
    let dentroDoGrid = false;

    while (!dentroDoGrid) {
        orientacaoLetras = verticalHorizontalDiagonal();
        posicaoEscolhida = escolherPosicao();
        coordenadas = []; // Reseta as coordenadas para cada nova tentativa

        switch (orientacaoLetras) {
            case 'vertical':
                for (let letraIndice = 0; letraIndice < nome.length; letraIndice++) {
                    const celulasCertas = letraIndice * 12 + posicaoEscolhida;
                    coordenadas.push(celulasCertas);
                }
                if (coordenadas.every(coordenada => coordenada <= 143) && verificarConflito(coordenadas, nome)) {
                    dentroDoGrid = true;
                }
                break;

            case 'horizontal':
                for (let letraIndice = 0; letraIndice < nome.length; letraIndice++) {
                    const celulasCertas = letraIndice + posicaoEscolhida;
                    coordenadas.push(celulasCertas);
                }
                if (coordenadas.every(coordenada => coordenada < 144 && coordenada % 12 !== 0) && verificarConflito(coordenadas, nome)) {
                    dentroDoGrid = true;
                }
                break;

            case 'diagonal':
                for (let letraIndice = 0; letraIndice < nome.length; letraIndice++) {
                    const celulasCertas = letraIndice * 13 + posicaoEscolhida;
                    coordenadas.push(celulasCertas);
                }
                if (coordenadas.every(coordenada => coordenada <= 143 && coordenada % 12 !== 0) && verificarConflito(coordenadas, nome)) {
                    dentroDoGrid = true;
                }
                break;
        }
    }

    coordenadas.forEach((coordenada, letraIndice) => {
        celulas[coordenada].innerHTML = nome[letraIndice]; // Adiciona a letra na célula
    });
}

// Para cada nome escolhido, insere no grid
nomesEscolhidos.forEach(nome => {
    inserirPalavra(nome);
});
