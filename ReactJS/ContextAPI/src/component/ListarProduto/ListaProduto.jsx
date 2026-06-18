import { useContext } from "react";
import { ProdutoContext } from "../../context/ProdutoContext";
import Produto from "../produto/produto";

const ListaProduto = () => {
    const {listarProduto} = useContext(ProdutoContext)
    return (
        <div>
        <h2>Pagina de Listar Produto</h2>
        {listarProduto.map((produto, index) => {
            return <p key = {index}>{produto}</p>
        })} 
        </div>
    )
}

export default ListaProduto
