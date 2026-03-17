let pedido = JSON.parse(localStorage.getItem("pedido"))
let subtotal = parseFloat(localStorage.getItem("total"))

let tipoPedido = localStorage.getItem("tipoPedido")

let area = document.getElementById("listaResumo")

pedido.forEach(item => {

area.innerHTML += `

<div class="itemResumo">

<span>
${item.qtd}x ${item.nome}
${item.obs ? `<br><small>${item.obs}</small>` : ""}
</span>

<span>R$ ${item.preco * item.qtd}</span>

</div>

`

})

let totalFinal = subtotal

if(tipoPedido === "entrega"){

document.getElementById("taxa").innerHTML = "Entrega: R$5"

totalFinal += 5

}

document.getElementById("totalFinal").innerText = totalFinal

function editarPedido(){

window.location.href = "index.html"

}

function irPagamento(){

window.location.href = "pagamento.html"

}