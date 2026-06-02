import React from "react";
import { ProdutoContext } from "../../context/ProdutoContext";
import { useContext } from "react";
import {useState } from "react";

const CadastroProduto = () => {
    const {produto, setProduto} = useContext(ProdutoContext);
    const [novoProduto, setNovoProduto] = useState();
    return (
        <div>
            <h2>Pagina de Cadastro de Produto</h2>
            <input type="text"
                placeholder="digite o novo produto"
                onChange={(e) => {
                    setNovoProduto(e.target.value);
                }} />
            <button onClick={() => {
                setProduto(novoProduto);
            }}>Cadastrar Produto</button>
            <p>Novo Produto: <strong>{novoProduto}</strong></p>
        </div>
    );
};

export default CadastroProduto;