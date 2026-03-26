let carrinho = []
let produtos = {}

// TESTE
const modoTeste = false

function verificarHorario() {

    let dia, hora, minutos

    if (modoTeste) {
        dia = 3 
        hora = 19 
        minutos = 0
    } else {
        const agora = new Date()
        dia = agora.getDay()
        hora = agora.getHours()
        minutos = agora.getMinutes()
    }

    const horaAtual = hora + minutos / 60

    const manha = (
        dia !== 1 &&
        horaAtual >= 9 &&
        horaAtual <= 13.5
    )

    const noite = (
        (dia === 5 || dia === 6 || dia === 0 || modoTeste) &&
        horaAtual >= 18 &&
        horaAtual <= 22.5
    )

    return { manha, noite }
}

function pegarCardapioAtual() {
    const { manha, noite } = verificarHorario()

    if (manha) return cardapioManha
    if (noite) return cardapioNoite

    return {}
}

function restauranteAberto() {
    const { manha, noite } = verificarHorario()
    return manha || noite
}

function mostrarCategoria(cat){

let area = document.getElementById("produtos")
area.innerHTML=""

if(!produtos[cat]){
    area.innerHTML = "<p>Categoria não disponível nesse horário</p>"
    return
}

produtos[cat].forEach((prod,index)=>{

let ehSimples = cat === "bebidas" || cat === "entradas"

let destaque = prod.destaque 
? `<span class="tag">🔥 Mais pedido</span>` 
: ""

let acomp = prod.acompanhamentos
? `<p class="acomp">${prod.acompanhamentos.join(", ")}</p>`
: ""

// NORMAL / ZERO
let opcoes = prod.opcoes 
? `
<div class="opcoes-botoes" id="opcao-${cat}-${index}">
${prod.opcoes.map((o,i) => `
<button 
type="button"
class="btn-opcao ${i === 0 ? 'ativo' : ''}" 
onclick="selecionarOpcao('${cat}',${index},this)">
${o}
</button>
`).join("")}
</div>
`
: ""

area.innerHTML += ehSimples ? `

<div class="produto bebida">

<div class="bebida-linha">
<span class="nome-bebida">${prod.nome}</span>
<span class="preco-bebida">R$ ${prod.preco}</span>
</div>

${opcoes}

<div class="bebida-acoes">

<button onclick="menos(${index},'${cat}')">-</button>
<span id="qtd-${cat}-${index}">1</span>
<button onclick="mais(${index},'${cat}')">+</button>

<button class="add-bebida"
onclick="adicionar('${prod.nome}',${prod.preco},${index},'${cat}')">
+ Adicionar
</button>

</div>

</div>

` : `

<div class="produto">

${destaque}

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
placeholder="Ex: sem cebola, bem passado..."
>

<button class="add"
onclick="adicionar('${prod.nome}',${prod.preco},${index},'${cat}')">

Adicionar • R$ ${prod.preco}

</button>

</div>

`
})

}

function selecionarOpcao(cat,index,botao){

let container = document.getElementById(`opcao-${cat}-${index}`)

let botoes = container.querySelectorAll(".btn-opcao")

botoes.forEach(b => b.classList.remove("ativo"))

botao.classList.add("ativo")

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

// NORMAL / ZERO
let containerOpcao = document.getElementById(`opcao-${cat}-${index}`)
let opcao = ""

if(containerOpcao){
    let ativo = containerOpcao.querySelector(".btn-opcao.ativo")
    if(ativo){
        opcao = ativo.innerText
    }
}

// OBS
let campoObs = document.getElementById(`obs-${cat}-${index}`)
let obs = ""

if(campoObs){
    obs = campoObs.value
    campoObs.value = ""
}

let item=carrinho.find(i=> 
    i.nome===nome && 
    i.obs===obs &&
    i.opcao===opcao
)

if(item){
item.qtd+=qtd
}else{
carrinho.push({nome,preco,qtd,obs,opcao})
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
${item.nome} ${item.opcao ? `(${item.opcao})` : ""}
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
"Ver pedido • R$"+total

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
aviso.innerText = "Adicionado ao pedido"
aviso.classList.add("mostrar")

setTimeout(()=>{
aviso.classList.remove("mostrar")
},1500)
}

function confirmarPedido(){

if(!restauranteAberto()){
alert("Estamos fechados no momento")
return
}

let pedidoSalvo = JSON.parse(localStorage.getItem("pedido")) || []

if(pedidoSalvo.length === 0){
alert("Seu carrinho está vazio. Adicione um produto para continuar.")
return
}

localStorage.setItem("pedido",JSON.stringify(pedidoSalvo))
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

const { noite } = verificarHorario()

produtos = pegarCardapioAtual()

// aviso de fechado
if (!restauranteAberto()) {
    const aviso = document.getElementById("avisoFechado")

    if (aviso) {
        aviso.style.display = "block"
        aviso.innerText = "Estamos fechados. Funcionamos de terça a domingo das 10h às 14h e à noite de sexta a domingo das 18h às 23h."
    }
}

if (noite) {
    const btn = document.querySelector("button[onclick=\"mostrarCategoria('quentinhas')\"]")
    if (btn) btn.innerText = "Espetinhos"
}

carrinho = JSON.parse(localStorage.getItem("pedido")) || []

atualizarPedido()

if (produtos.quentinhas) {
    mostrarCategoria("quentinhas")
} else if (produtos.entradas) {
    mostrarCategoria("entradas")
} else if (produtos.bebidas) {
    mostrarCategoria("bebidas")
}

}