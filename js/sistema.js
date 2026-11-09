
// Arrays do sistema
var nomesProdutos = [];
var precosProdutos = [];
var totaisVendas = [];

// Cadastrar produto
function cadastrarProduto() {
    var nome = prompt("Digite o nome do produto:");
    if (nome == null || nome == "") {
        alert("Nome inválido!");
        return;
    }
    // Verificar se o produto já está cadastrado
    for (var i = 0; i < nomesProdutos.length; i++) {
        if (nomesProdutos[i] == nome) {
            alert("Este produto já está cadastrado!");
            return;
        }
    }
    var preco = parseFloat(prompt("Digite o preço do produto:"));
    if (preco <= 0 || preco != preco) {
        alert("Preço inválido! O preço deve ser maior que zero.");
        return;
    }
    nomesProdutos.push(nome);
    precosProdutos.push(preco);
    alert("Produto cadastrado com sucesso!");
}
// Listar produtos
function listarProdutos() {
    if (nomesProdutos.length == 0) {
        alert("Não existem produtos cadastrados!");
        return;
    }
    var mensagem = "PRODUTOS CADASTRADOS:\n\n";
    for (var i = 0; i < nomesProdutos.length; i++) {
        mensagem += "Código: " + (i + 1) + "\n";
        mensagem += "Nome: " + nomesProdutos[i] + "\n";
        mensagem += "Preço: R$ " + precosProdutos[i].toFixed(2) + "\n\n";
    }
    alert(mensagem);
}
// Calcular subtotal da venda
function calcularTotalVenda(preco, quantidade) {
    var subtotal = preco * quantidade;
    return subtotal;
}
// Calcular desconto
function calcularDesconto(total) {
    var desconto = 0;
    if (total > 50) {
        desconto = total * 0.10;
    }
    return desconto;
}
// Exibir resumo da venda
function exibirResumoVenda(nome, preco, quantidade, subtotal, desconto) {
    var valorFinal = subtotal - desconto;
    var mensagem = "RESUMO DA VENDA\n\n";
    mensagem += "Produto: " + nome + "\n";
    mensagem += "Preço unitário: R$ " + preco.toFixed(2) + "\n";
    mensagem += "Quantidade: " + quantidade + "\n";
    mensagem += "Subtotal: R$ " + subtotal.toFixed(2) + "\n";
    mensagem += "Desconto: R$ " + desconto.toFixed(2) + "\n";
    mensagem += "Valor final: R$ " + valorFinal.toFixed(2);
    alert(mensagem);
}
// Realizar venda
function realizarVenda() {
    if (nomesProdutos.length == 0) {
        alert("Não existem produtos cadastrados!");
        return;
    }
    listarProdutos();
    var codigo = parseInt(prompt("Digite o código do produto:"));
    if (codigo < 1 || codigo > nomesProdutos.length) {
        alert("Código de produto inválido!");
        return;
    }
    var indice = codigo - 1;
    var quantidade = parseInt(prompt("Digite a quantidade desejada:"));
    if (quantidade <= 0 || quantidade != quantidade) {
        alert("Quantidade inválida!");
        return;
    }
    var subtotal = calcularTotalVenda(precosProdutos[indice], quantidade);
    var desconto = calcularDesconto(subtotal);
    var valorFinal = subtotal - desconto;
    exibirResumoVenda(
        nomesProdutos[indice],
        precosProdutos[indice],
        quantidade,
        subtotal,
        desconto
    );
    if (confirm("Deseja concluir esta venda?")) {
        totaisVendas.push(valorFinal);
        alert("Venda registrada com sucesso!");
    } else {
        alert("Venda cancelada!");
    }
}
// Calcular total de vendas do dia
function obterTotalVendasDia() {
    var total = 0;
    for (var i = 0; i < totaisVendas.length; i++) {
        total = total + totaisVendas[i];
    }
    return total;
}
// Exibir total de vendas do dia
function exibirTotalVendasDia() {
    if (totaisVendas.length == 0) {
        alert("Não existem vendas registradas!");
        return;
    }
    var total = obterTotalVendasDia();
    var mensagem = "VENDAS DO DIA\n\n";
    mensagem += "Quantidade de vendas: " + totaisVendas.length + "\n";
    mensagem += "Total vendido: R$ " + total.toFixed(2);
    alert(mensagem);
}
// Exibir menu
function exibirMenu() {
    var opcao = parseInt(prompt(
        "SISTEMA DE CAIXA - LANCHONETE\n\n" +
        "1 - Cadastrar produto\n" +
        "2 - Listar produtos\n" +
        "3 - Realizar venda\n" +
        "4 - Consultar total de vendas do dia\n" +
        "5 - Encerrar sistema\n\n" +
        "Escolha uma opção:"
    ));
    return opcao;
}
// Controlar execução do sistema
function executarSistema() {
    var opcao = 0;
    while (opcao != 5) {
        opcao = exibirMenu();
        switch (opcao) {
            case 1:
                cadastrarProduto();
                break;
            case 2:
                listarProdutos();
                break;
            case 3:
                realizarVenda();
                break;
            case 4:
                exibirTotalVendasDia();
                break;
            case 5:
                alert("Sistema encerrado!");
                break;
            default:
                alert("Opção inválida!");
                break;
        }
    }
}
// Iniciar o sistema
executarSistema();
