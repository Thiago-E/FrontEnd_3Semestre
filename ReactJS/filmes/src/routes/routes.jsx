import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "../assets/pages/login/login";
import CadastroFilmes from "../assets/pages/cadastroFilmes/cadastroFilmes";
import CadastroGeneros from "../assets/pages/cadastroGeneros/cadastroGeneros";

 const Rotas = () => {
    return(
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<Login />} />
               < Route path="/Filme" element={<CadastroFilmes />} />
               < Route path="/Genero" element={<CadastroGeneros />} />
            </Routes>
        </BrowserRouter>
            
    )
}
export default Rotas
