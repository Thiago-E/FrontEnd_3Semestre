import { useContext } from "react";
import { ProdutoContext } from "../../context/ProdutoContext";

const Produto = () => {
    const { produto } = useContext(ProdutoContext);
    return (
            <h2>Pagina de Produto</h2>
    
    );
};

export default Produto;