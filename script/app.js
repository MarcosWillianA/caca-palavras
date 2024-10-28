const container = document.querySelector('#container');
const nomes = ['marcos', 'rosângela', 'alcilene', 'suzana', 'ângela', 'érica', 'joão', 'maria', 'pedro', 'ana', 'carlos', 'luana', 'fernando', 'carla', 'rafael', 'tatiane', 'vitor', 'juliana', 'gustavo', 'luiz', 'isabel', 'renan', 'karla', 'davi', 'patrícia', 'josefina', 'matheus', 'camila', 'andre', 'vanessa', 'lúcio'];
const animais = ['capivara', 'gato', 'cachorro', 'elefante', 'tigre', 'lobo', 'pato', 'raposa', 'urso', 'sapo', 'morcego', 'peixe', 'rato', 'tubarão', 'jacaré', 'macaco', 'gaivota', 'foca', 'caranguejo', 'pavão', 'puma', 'falcão', 'grilo'];
const paises = ['brasil', 'argelia', 'chile', 'canada', 'méxico', 'frança', 'japao', 'china', 'india', 'austria', 'nigeria', 'senegal', 'guinea', 'jamaica', 'haiti', 'tonga', 'suecia', 'noruega', 'omã', 'qatar', 'vietnam', 'siria', 'lituania', 'luxemburgo', 'malásia', 'nepal', 'cazaquistao', 'estonia', 'gana', 'zambia', 'tanzania'];
const objetos = ['mesa', 'cadeira', 'carro', 'livro', 'caneta', 'relógio', 'teclado', 'mouse', 'pente', 'banco', 'estojo', 'tábua', 'caixa', 'quadro', 'faca', 'lanterna', 'prato', 'copo', 'garrafa', 'tapete', 'martelo'];
const partesCorpo = ['cabeça', 'braço', 'perna', 'mão', 'pé', 'olho', 'orelha', 'nariz', 'boca', 'coração', 'fígado', 'rim', 'dente', 'pulmão', 'joelho', 'pescoço', 'cotovelo', 'ombro', 'antebraço', 'barriga'];
const comidas = ['pizza', 'sushi', 'azeite', 'frango', 'arroz', 'salada', 'pudim', 'bolo', 'crepe', 'sopa', 'coxinha', 'biscoito', 'torta', 'carne', 'peixe', 'maçã', 'kiwi', 'ovos', 'pastel', 'couve', 'batata', 'pão', 'gelatina', 'morango', 'fruta', 'picadinho', 'tapioca', 'cuscuz', 'quibe', 'panqueca'];
const marcas = ['nike', 'adidas', 'apple', 'ford', 'bmw', 'samsung', 'gucci', 'sony', 'kfc', 'puma', 'nokia', 'pepsi', 'boticario', 'reebok', 'havan', 'microsoft', 'coca', 'hershey', 'loreal', 'volvo'];

const tema = [nomes, animais, paises, objetos, partesCorpo, comidas];
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

function escolherTema () {
    return tema[Math.floor(Math.random() * tema.length)];
}

let temaEscolhido = escolherTema();
//console.log('Tema escolhido:' ,temaEscolhido);

// Função para escolher 4 nomes únicos
function escolherNomes() {
    const nomesEscolhidos = [];
    const nomesDisponiveis = [...temaEscolhido];

    while (nomesEscolhidos.length < 4 && nomesDisponiveis.length > 0) {
        let n = Math.floor(Math.random() * nomesDisponiveis.length);
        nomesEscolhidos.push(nomesDisponiveis[n]);
        nomesDisponiveis.splice(n, 1);
    }

    return nomesEscolhidos.map(nome => nome.split('')); // Converte cada nome em um array de letras
}

let nomesEscolhidos = escolherNomes();
console.log('Nomes escolhidos:', nomesEscolhidos);

const palavrasClasses = {};
let palavrasEncontradas = 0;
const palavrasContabilizadas = new Set();

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

    palavrasClasses[nome.join('')] = coordenadas;
    coordenadas.forEach((coordenada, letraIndice) => {
        celulas[coordenada].innerHTML = nome[letraIndice]; // Adiciona a letra na célula
        celulas[coordenada].classList.add(`palavra-${nome.join('')}`);
    });
}

// Para cada nome escolhido, insere no grid
nomesEscolhidos.forEach(nome => {
    inserirPalavra(nome);
});

function verificarPalavraEncontrada(nome) {
    const coordenadas = palavrasClasses[nome];
    return coordenadas.every(coordenada => celulas[coordenada].classList.contains('escolhida'));
}

celulas.forEach(celula => {
    celula.addEventListener('click', () => {
        celula.classList.add('escolhida');
        
        for (const palavra in palavrasClasses) {
            if (verificarPalavraEncontrada(palavra) && !palavrasContabilizadas.has(palavra)) {
                palavrasClasses[palavra].forEach(coordenada => {
                    celulas[coordenada].classList.add('encontrada');
                });
                palavrasEncontradas++;
                palavrasContabilizadas.add(palavra); 
                verificarVitoria();
            }
        }

        setTimeout(() => {
            celula.classList.remove('escolhida');
        }, 12000);
    })
})

console.log(palavrasEncontradas);
console.log(nomesEscolhidos.length);

function exibirModal() {
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.backgroundColor = 'white';
    modal.style.padding = '20px';
    modal.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
    modal.style.zIndex = 1000;

    const mensagem = document.createElement('p');
    mensagem.textContent = 'Você ganhou! Todas as palavras foram encontradas!';
    modal.appendChild(mensagem);

    const botaoFechar = document.createElement('button');
    botaoFechar.textContent = 'Fechar';
    botaoFechar.onclick = () => {
        document.body.removeChild(modal);
    };
    modal.appendChild(botaoFechar);

    document.body.appendChild(modal);
}

function verificarVitoria() {
    if (palavrasEncontradas === nomesEscolhidos.length) {
        console.log('VOCÊ GANHOU! TODAS AS PALAVRAS FORAM ENCONTRADAS');
        exibirModal();
    }
}