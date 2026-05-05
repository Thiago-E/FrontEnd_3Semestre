const estoque = [
    {
    descricao : 'Camisa Polo',
    Cor : 'Preta',
    Preco : '600',
    Perfil : 'M',
    quantidade : '400',
    promocao : true
},
{
    descricao : 'Camisa Polo',
    Cor : 'Vermelho',
    Preco : '500',
    Perfil : 'M',
    quantidade : '200',
    promocao : false
},
{
    descricao : 'Camisa Polo',
    Cor : 'Azul',
    Preco : '560',
    Perfil : 'M',
    quantidade : '430',
    promocao : false
},
{
    descricao : 'Camisa Polo',
    Cor : 'Branca',
    Preco : '300',
    Perfil : 'F',
    quantidade : '240',
    promocao : true
},

];

// const camisetasFemininas = estoque.filter(item => item.Perfil === 'F');

// console.log(camisetasFemininas);	

const promocao = estoque.filter((p) => {
    return p.promocao == true;
});

console.log(promocao);

let qtdPromocao = 0;
const produtosPromocao = estoque.filter((p)=> {
    if (p.promocao == true) {
        qtdPromocao += p.quantidade;
    }
    return p.promocao == true;
});

console.log(`Quantidade de produtos em promocao: ${qtdPromocao}`);

console.log(produtosPromocao);