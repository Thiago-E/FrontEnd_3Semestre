import { useState } from "react";
import { ProdutoContext } from "./ProdutoContext";

export const ProdutoProvider = ({ children }) => {  
    const [produto, setProduto] = useState("");
    const [ListaProduto, setListaProduto] = useState([]);
    return (
        <ProdutoContext.Provider
            value={{
                produto,
                setProduto,
                ListaProduto,
                setListaProduto
            }}
         >

            {children}
        </ProdutoContext.Provider>
    )
}