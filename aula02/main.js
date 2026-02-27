'use strict'

let imagemNova = "img/2k3Splinter.webp"
let imagemAtual = "img/m.splinter.jpg"

function trocarImagem() {
    document.getElementById("imagem").src = imagemAtual
    let guardarImagem = imagemAtual
    imagemAtual = imagemNova
    imagemNova = guardarImagem
}

function salvarTexto() {
    const texto = document.getElementById("entrada")
    let lista = document.getElementById("lista")
    const retorno = document.getElementById("retorno")
    let salvar = texto.value

    if (salvar != '') {
        let novaLinha = document.createElement('li')
        novaLinha.textContent = salvar
        lista.appendChild(novaLinha)
        retorno.textContent = "Salvo com sucesso!"
        texto.value = ''
    }

    else {
        retorno.textContent = "Campo vazio, insira sua mensagem!"
        alert("Mensangem não registrada, campo vazio!")
    }
}