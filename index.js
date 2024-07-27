var setaDireita = window.document.getElementById("seta-direita")
var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")
var setaEsquerda = window.document.getElementById("seta-esquerda")


function RolarParaDireita() {
    Leonardo.style = "display:none"
    Bruna.style = "display:flex"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex; margin-top:70px"
}

function RolarParaEsquerda() {
    Leonardo.style = "display:flex"
    Bruna.style = "disply:none"
    setaEsquerda.style = "disply:none"
    setaDireita.style = "display:flex; margin-top:55px"
}