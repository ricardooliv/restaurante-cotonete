let pedido = [];
let subtotal = 0;
let taxaEntrega = 5;

const divProdutos = document.getElementById("produtos");
const listaPedido = document.getElementById("listaPedido");
const subtotalSpan = document.getElementById("subtotal");
const taxaEntregaSpan = document.getElementById("taxaEntrega");
const totalSpan = document.getElementById("total");
const contadorItens = document.getElementById("contadorItens");
const opcoesQuentinha = document.getElementById("opcoesQuentinha");
const pagamento = document.getElementById("pagamento");
const trocoDiv = document.getElementById("trocoDiv");
const troco = document.getElementById("troco");

function mostrarCategoria(categoria){

    divProdutos.innerHTML = "";

    const titulo = document.createElement("h3");

    if(categoria === "quentinhas"){
        titulo.innerText = "Escolha sua Quentinha";
    }

    if(categoria === "parmegiana"){
        titulo.innerText = "Escolha o tamanho do Parmegiana";
    }

    if(categoria === "churrasco"){
        titulo.innerText = "Escolha o tamanho do Churrasco";
    }

    divProdutos.appendChild(titulo);

    produtos[categoria].forEach((produto, index) => {

        const item = document.createElement("div");

        item.innerHTML = `
        <h3>${produto.nome}</h3>

        ${categoria === "quentinhas" ? 
        "<p style='font-size:14px;color:gray'>Acompanha: arroz agrega, feijão tropeiro, salada, farofa e vinagrete</p>" 
        : ""}

        <p>R$ ${produto.preco}</p>

        <button onclick="adicionarPedido('${categoria}', ${index})">
        Adicionar
        </button>
        `;

        divProdutos.appendChild(item);

    });

}

function atualizarPedido(){

    listaPedido.innerHTML = "";
    subtotal = 0;

    pedido.forEach((item, index) => {

        const li = document.createElement("li");

        li.innerHTML = `
        ${item.nome} - R$ ${item.preco}
        <button onclick="removerItem(${index})">❌</button>
        `;

        listaPedido.appendChild(li);

        subtotal += item.preco;

    });

    const totalFinal = subtotal + taxaEntrega;

    subtotalSpan.innerText = subtotal;
    taxaEntregaSpan.innerText = taxaEntrega;
    totalSpan.innerText = totalFinal;

    contadorItens.innerText = pedido.length;

}

function adicionarPedido(categoria, index){

    const produto = produtos[categoria][index];

    pedido.push({
        nome: produto.nome,
        preco: produto.preco
    });

    atualizarPedido();

}

function removerItem(index){

    pedido.splice(index, 1);

    atualizarPedido();

}

function limparPedido(){

    pedido = [];

    atualizarPedido();

}

function verificarPagamento(){

    if(pagamento.value === "Dinheiro"){

        trocoDiv.style.display = "block";

    }else{

        trocoDiv.style.display = "none";

    }

}

function enviarPedido(){

    const nome = document.getElementById("nomeCliente").value;
    const endereco = document.getElementById("enderecoCliente").value;
    const observacao = document.getElementById("observacao").value;

    let mensagem = "🍽 *Pedido - Restaurante Cotonete* %0A%0A";

    mensagem += "👤 Nome: " + nome + "%0A";
    mensagem += "📍 Endereço: " + endereco + "%0A%0A";

    mensagem += "🛒 Pedido:%0A";

    pedido.forEach(item => {
        mensagem += "- " + item.nome + " R$ " + item.preco + "%0A";
    });

    mensagem += "%0A🧾 Subtotal: R$ " + subtotal;
    mensagem += "%0A🛵 Entrega: R$ " + taxaEntrega;
    mensagem += "%0A💰 Total: R$ " + (subtotal + taxaEntrega);

    mensagem += "💳 Pagamento: " + pagamento.value + "%0A";

    if(pagamento.value === "Dinheiro" && troco.value){
        mensagem += "💵 Troco para: R$ " + troco.value + "%0A";
    }

    if(observacao){
        mensagem += "%0A📝 Observação: " + observacao;
    }

    const telefone = "5599999999999";

    const url = `https://wa.me/${telefone}?text=${mensagem}`;

    window.open(url);

}