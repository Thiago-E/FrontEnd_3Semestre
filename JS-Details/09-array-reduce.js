const estoque = [
    {
    descricao : 'Camisa Polo',
    Cor : 'Preta',
    Preco : 600,
    Perfil : 'M',
    quantidade : 400,
    promocao : true
},
{
    descricao : 'Camisa Polo',
    Cor : 'Vermelho',
    Preco : 500,
    Perfil : 'M',
    quantidade : 200,
    promocao : false
},
{
    descricao : 'Camisa Polo',
    Cor : 'Azul',
    Preco : 560,
    Perfil : 'M',
    quantidade : 430,
    promocao : false
},
{
    descricao : 'Camisa Polo',
    Cor : 'Branca',
    Preco : 300,
    Perfil : 'F',
    quantidade : 240,
    promocao : true
},

];

// Reduz o array a unico elemento. No caso um somatorio, por exemplo:
let totalPreco = 0;
let totalEstoque = estoque.reduce((total, produto) => {
    totalPreco += produto.Preco *produto.quantidade
    return total + produto.quantidade;
}, 0);
console.clear();
console.log(`voce tem um total de ${totalEstoque} produtos no estoque`);
console.log(`O valor total do seu estoque e R$ ${totalPreco.toFixed(2)}`);