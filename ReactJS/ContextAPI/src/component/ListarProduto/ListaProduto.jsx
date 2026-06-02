import { useContext } from "react";
import { ProdutoContext } from "../../context/ProdutoContext";

const ListarProduto = () => {
    const {listarProduto} = useContext(ProdutoContext)
    return (
        <>
        <h2>Pagina de Listar Produto</h2>
        {listarProduto.map((item) => {
            return (
                <p key={Math.random()}>{item}</p>
            )
        })} 
        </>
    )
}

export default ListarProduto
