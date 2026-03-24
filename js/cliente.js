
const modoTeste = false

function verificarNoite(){

let dia, hora, minutos

if(modoTeste){
    dia = 3
    hora = 19
    minutos = 0
}else{
    const agora = new Date()
    dia = agora.getDay()
    hora = agora.getHours()
    minutos = agora.getMinutes()
}

const horaAtual = hora + minutos / 60

const noite = (
    (dia === 5 || dia === 6 || dia === 0 || modoTeste) &&
    horaAtual >= 18 &&
    horaAtual <= 23
)

return noite
}

function retirada(){

let area = document.getElementById("dados")

let nome = localStorage.getItem("nome") || ""

area.innerHTML = `

<input id="nome" placeholder="Nome" value="${nome}">

<button onclick="irPagamento('retirada')">
Continuar
</button>

`

}

function entrega(){

if(verificarNoite()){
alert("À noite trabalhamos apenas com retirada")
return
}

let area = document.getElementById("dados")

let nome = localStorage.getItem("nome") || ""
let endereco = localStorage.getItem("endereco") || ""
let referencia = localStorage.getItem("referencia") || ""
let bairro = localStorage.getItem("bairro") || ""
let telefone = localStorage.getItem("telefone") || ""

area.innerHTML = `

<input id="nome" placeholder="Nome" value="${nome}">

<input id="endereco" placeholder="Endereço" value="${endereco}">

<input id="referencia" placeholder="Ex: casa azul, perto da igreja (opcional)" value="${referencia}">

<input id="bairro" placeholder="Bairro" value="${bairro}">

<input id="telefone" placeholder="Telefone" value="${telefone}">

<button onclick="irPagamento('entrega')">
Continuar
</button>

`

}

function irPagamento(tipo){

let nome = document.getElementById("nome").value.trim()

if(!nome){
alert("Preencha seu nome")
return
}

// salva tipo
localStorage.setItem("tipoPedido", tipo)
localStorage.setItem("nome", nome)

// entrega
let endereco = document.getElementById("endereco")?.value.trim() || ""
let referencia = document.getElementById("referencia")?.value.trim() || ""
let bairro = document.getElementById("bairro")?.value.trim() || ""
let telefone = document.getElementById("telefone")?.value.trim() || ""

if(tipo === "entrega"){

if(!endereco){
alert("Preencha o endereço")
return
}

if(!bairro){
alert("Preencha o bairro")
return
}

if(!telefone){
alert("Preencha o telefone")
return
}

}

// salvar tudo
localStorage.setItem("endereco", endereco)
localStorage.setItem("referencia", referencia)
localStorage.setItem("bairro", bairro)
localStorage.setItem("telefone", telefone)

// ir para pagamento
window.location.href = "pagamento.html"

}

window.onload = function(){

if(verificarNoite()){

let botoes = document.querySelectorAll(".tipoPedido button")

if(botoes[1]){
botoes[1].style.display = "none"
}

let aviso = document.createElement("p")
aviso.innerText = " À noite trabalhamos apenas com retirada"
aviso.style.color = "red"
aviso.style.marginBottom = "10px"

document.querySelector(".form").prepend(aviso)

}

}