import "./Botao.css"

const Botao = (props) => {
    return(

        <button className ="botao" type= {props.btneditar ? "button" : "submit"}
        onClick ={() => {
            if(props.btneditar){
                props.cancelarEdicao()
                return false
            }
        }}>
            {props.nomeDoBotao}
        </button>

    )
}

export default Botao;