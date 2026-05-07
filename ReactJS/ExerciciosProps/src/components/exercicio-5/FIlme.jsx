// 05) Crie um componente chamado Filme que receba:
// titulo
// ano
// genero
// nota
// Mostre todas as informações na tela.
// Crie pelo menos 3 filmes diferentes.


import "./Filme.css"

const Filme = ({titulo,ano,genero,nota}) =>  {
    return (
        <p>
        Titulo: {titulo} <br />
        Data de Lancamento: {ano} <br />
        genero: {genero} <br />
        nota: {nota.toFixed(2)} <br />
        </p>
    )
}

export default Filme;