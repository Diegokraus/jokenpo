const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
const result = document.getElementById('result')
const score1 = document.getElementById('score1')
const score2 = document.getElementById('score2')
let countJogador1 = 0
let countJogador2 = 0


// Valores para as jogadas: Pedra(0)  Papel(1)  Tesoura(2)
const verificaGanhador = function(jogador1, jogador2){
    if(jogador1 === jogador2){
        result.innerText = 'Ganhador: ' + 'EMPATE'

    } else if((jogador1 === 0 && jogador2 === 2)||(jogador1 ===1 && jogador2===0)||(jogador1===2 && jogador2 ===1)){
        result.innerText = 'Ganhador: ' + 'VOCÊ'
        countJogador1++
        score1.innerText = countJogador1

    }else {
        result.innerText = 'Ganhador: ' + 'ALEXA'
        countJogador2++
        score2.innerText = countJogador2
    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

rock.addEventListener('click', () => {
    const minhaJogada = 0
    const jogadaRobot = getRandomIntInclusive(0, 2)

    verificaGanhador(minhaJogada, jogadaRobot)
})

paper.addEventListener('click', () => {
    const minhaJogada = 1
    const jogadaRobot = getRandomIntInclusive(0, 2)

    verificaGanhador(minhaJogada, jogadaRobot)
})

scissors.addEventListener('click', () => {
    const minhaJogada = 2
    const jogadaRobot = getRandomIntInclusive(0, 2)

    verificaGanhador(minhaJogada, jogadaRobot)
})