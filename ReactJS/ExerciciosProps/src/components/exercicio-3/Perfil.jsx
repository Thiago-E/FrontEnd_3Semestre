// 03) Crie um componente chamado Perfil que receba:
// nome
// idade
// profissao
// O componente deve exibir os dados em formato de cartão.

import "./Perfil.css"

const Perfil = ({nome,idade,profissao}) =>  {
    return (
        <p>
            Nome :{nome} <br />
            Idade :{idade} <br />
            Profissao: {profissao}
        </p>
    )
}

export default Perfil