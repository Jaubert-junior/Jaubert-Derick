function getById(id) {
    return document.getElementById(id)
}

//Q.1

getById('botaocaucular').addEventListener('click',() => {
    
let peso = Number(getById('peso').value)
let altura = Number(getById('altura').value)
let imc = peso / altura ** 2

let resposta = ''

if (imc < 18.5) {
        resposta = "Abaixo do peso"
} else if (imc < 24.9) {
        resposta = "peso normal"
} else if (imc >= 25 && imc < 29.9) {
        resposta = "sobrepeso"
} else {
        resposta = 'obesidade'
}

getById('IMC').innerHTML = `IMC: ${imc.toFixed(2)}`
getById('resultado1').innerHTML = resposta
})

//Q.2

votos = [0, 0, 0]

getById('votar').addEventListener('click', () => { 
    let voto = getById('votação').value
    votos[voto] ++
    getById("resposta").innerText = 'seu voto foi comfirmado'
})

getById("apurar").addEventListener('click', () => {
    let mais_votado = ""
    if (votos[0] > votos[1] && votos[0] > votos[2]){
        mais_votado = 'candidato 1'
    } else if (votos[1] > votos[0] && votos[1] >votos[2]) {
        mais_votado = 'candidato 2'
    } else if (votos[2] > votos[0] && votos[2] >votos[1]) {
        mais_votado = 'candidato 3'
    } else {
        mais_votado = "Empate!";
    }
    getById("resposta").innerText = mais_votado
    
})

getById('zerar').addEventListener('click', () => {
    votos = [0, 0, 0] 
    getById('resposta').innerText = 'votos zerados'
})

//Q.3

getById('botaoconverter').addEventListener('click', () => {
    let valor = Number(getById('valor').value)
    let tipo_conversão = getById('tipo_conversão').value

    if (tipo_conversão == 0){
        resultado3 = (valor * 9/5) + 32 
    } else {
        resultado3 = (valor - 32) * 5/9
    }
    getById('resultado3').innerText = resultado3
})

//Q.4

let total_gasto = 0
let mensagem = ''

getById('botaoadicionar').addEventListener('click', () => {
    let valor_gasto = Number(getById('valor_gasto').value)
    total_gasto += valor_gasto
})

getById('botaoresumo').addEventListener('click', () => {
    if (total_gasto < 50) {
        mensagem = 'gasto leve'
    } else if (total_gasto < 200){
        mensagem = 'gasto moderado'
    } else {
        mensagem = 'Cuidado com as despesas!'
    }

    getById('total').innerText = total_gasto
    getById('mensagem').innerText = mensagem
})

//Q.5
let numero_aleatorio = (Math.floor(Math.random() * 10)) + 1

getById('botaoverificar').addEventListener('click', () => {
    let mensagem = ''
    let numero_do_usuario = Number(getById('numero').value)
    if (numero_do_usuario > numero_aleatorio) {
        mensagem = 'Maior que o número!'
    } else if (numero_do_usuario < numero_aleatorio) {
        mensagem = 'Menor que o número!'
    } else {
        mensagem = 'Acertou!'
    }
    
    getById('constatação').innerText = mensagem
})