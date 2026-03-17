let carrinho = []

function mostrarCategoria(cat){

let area = document.getElementById("produtos")

area.innerHTML=""

produtos[cat].forEach((prod,index)=>{

let acomp = prod.acompanhamentos
? `<p class="acomp">${prod.acompanhamentos.join(" • ")}</p>`
: ""

area.innerHTML += `

<div class="produto">

<h3>${prod.nome}</h3>

<p class="preco">R$ ${prod.preco}</p>

${acomp}

<div class="controle">

<button onclick="menos(${index},'${cat}')">-</button>

<span id="qtd-${cat}-${index}">1</span>

<button onclick="mais(${index},'${cat}')">+</button>

</div>

<input 
type="text"
class="obs"
id="obs-${cat}-${index}"
placeholder="Observação (ex: sem cebola)"
>

<button class="add"
onclick="adicionar('${prod.nome}',${prod.preco},${index},'${cat}')">

Adicionar

</button>

</div>

`

})

}

function mais(index,cat){

let span=document.getElementById(`qtd-${cat}-${index}`)

span.innerText=parseInt(span.innerText)+1

}

function menos(index,cat){

let span=document.getElementById(`qtd-${cat}-${index}`)

let qtd=parseInt(span.innerText)

if(qtd>1){

span.innerText=qtd-1

}

}

function adicionar(nome,preco,index,cat){

let qtd=parseInt(
document.getElementById(`qtd-${cat}-${index}`).innerText
)

let obs = document.getElementById(`obs-${cat}-${index}`).value

document.getElementById(`obs-${cat}-${index}`).value = ""

let item=carrinho.find(i=>i.nome===nome && i.obs===obs)

if(item){

item.qtd+=qtd

}else{

carrinho.push({nome,preco,qtd,obs})

}

mostrarAviso()

atualizarPedido()

}

function atualizarPedido(){

let area = document.getElementById("listaPedido")

area.innerHTML=""

let total=0
let itens=0

carrinho.forEach((item,index)=>{

let subtotal=item.preco*item.qtd

total+=subtotal
itens+=item.qtd

area.innerHTML+=`

<div class="pedidoItem">

<span>
${item.nome}
${item.obs ? `<br><small>${item.obs}</small>` : ""}
</span>

<span>${item.qtd}x</span>

<span>R$ ${subtotal}</span>

<button class="remover" onclick="removerItem(${index})">
❌
</button>

</div>

`

})

document.getElementById("total").innerText=total

document.getElementById("resumoCarrinho").innerText =
itens+" itens • R$"+total

localStorage.setItem("pedido",JSON.stringify(carrinho))
localStorage.setItem("total",total)

}
function abrirCarrinho(){

if(carrinho.length === 0){

alert("Seu carrinho está vazio")

return

}

localStorage.setItem("pedido", JSON.stringify(carrinho))

window.location.href = "resumo.html"

}

function mostrarAviso(){

let aviso=document.getElementById("aviso")

aviso.classList.add("mostrar")

setTimeout(()=>{

aviso.classList.remove("mostrar")

},1500)

}

function confirmarPedido(){

if(carrinho.length === 0){

alert("Seu carrinho está vazio. Adicione um produto para continuar.")

return

}

localStorage.setItem("pedido",JSON.stringify(carrinho))

window.location.href="cliente.html"

}

function limparCarrinho(){

carrinho = []

document.getElementById("listaPedido").innerHTML=""

document.getElementById("total").innerText=0

localStorage.removeItem("pedido")
localStorage.removeItem("total")

}

function removerItem(index){

carrinho.splice(index,1)

atualizarPedido()

}

window.onload = function(){

let pedidoSalvo = JSON.parse(localStorage.getItem("pedido")) || []
let totalSalvo = parseFloat(localStorage.getItem("total")) || 0

carrinho = pedidoSalvo

atualizarPedido()

}
window.onload = function(){

let pedidoSalvo = JSON.parse(localStorage.getItem("pedido")) || []

carrinho = pedidoSalvo

atualizarPedido()

mostrarCategoria("quentinhas")

}