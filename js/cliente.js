function retirada(){

let area = document.getElementById("dados")

area.innerHTML = `

<input id="nome" placeholder="Nome">

<button onclick="irPagamento('retirada')">
Continuar
</button>

`

}

function entrega(){

let area = document.getElementById("dados")

area.innerHTML = `

<input id="nome" placeholder="Nome">

<input id="endereco" placeholder="Endereço">

<input id="bairro" placeholder="Bairro">

<input id="telefone" placeholder="Telefone">

<button onclick="irPagamento('entrega')">
Continuar
</button>

`

}

function irPagamento(tipo){

localStorage.setItem("tipoPedido", tipo)

let nome = document.getElementById("nome").value

localStorage.setItem("nome", nome)

let endereco = document.getElementById("endereco")?.value || ""
let bairro = document.getElementById("bairro")?.value || ""
let telefone = document.getElementById("telefone")?.value || ""

localStorage.setItem("endereco", endereco)
localStorage.setItem("bairro", bairro)
localStorage.setItem("telefone", telefone)

window.location.href = "resumo.html"

}
