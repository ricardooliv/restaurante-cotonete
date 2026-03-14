function mostrarTroco(){

let area = document.getElementById("areaTroco")

area.innerHTML = `

<p>Precisa de troco?</p>

<button onclick="trocoSim()">Sim</button>

<button onclick="pagar('Dinheiro')">Não</button>

`

}


function trocoSim(){

let area = document.getElementById("areaTroco")

area.innerHTML = `

<p>Troco para quanto?</p>

<input id="troco" placeholder="Ex: 50">

<button onclick="pagar('Dinheiro')">
Confirmar
</button>

`

}


function pagar(tipo){

let pedido = JSON.parse(localStorage.getItem("pedido"))
let subtotal = parseFloat(localStorage.getItem("total"))

let tipoPedido = localStorage.getItem("tipoPedido")

let nome = localStorage.getItem("nome")
let endereco = localStorage.getItem("endereco")
let bairro = localStorage.getItem("bairro")
let telefone = localStorage.getItem("telefone")

let troco = document.getElementById("troco")?.value || ""

let mensagem = "🍽️ *PEDIDO*\n\n"

pedido.forEach(item => {

mensagem += item.qtd + "x " + item.nome + "\n"

})

mensagem += "\nSubtotal: R$" + subtotal + "\n"

let totalFinal = subtotal
let tempo = ""

if(tipoPedido === "entrega"){

let taxa = 5

totalFinal += taxa

tempo = "40 minutos"

mensagem += "Entrega: R$5\n"
mensagem += "*Total: R$" + totalFinal + "*\n\n"

mensagem += "🚚 Tipo: ENTREGA\n"
mensagem += "Cliente: " + nome + "\n"
mensagem += "Endereço: " + endereco + "\n"
mensagem += "Bairro: " + bairro + "\n"
mensagem += "Telefone: " + telefone + "\n"

}else{

tempo = "30 minutos"

mensagem += "*Total: R$" + totalFinal + "*\n\n"

mensagem += "🏪 Tipo: RETIRADA\n"
mensagem += "Cliente: " + nome + "\n"

}

mensagem += "\n💳 Pagamento: " + tipo

if(tipo === "Dinheiro" && troco !== ""){

mensagem += "\n💰 Troco para: R$" + troco

}

mensagem += "\n\n⏱️ Tempo estimado: " + tempo

let link = "https://wa.me/5586998677278?text=" + encodeURIComponent(mensagem)

window.open(link)

}