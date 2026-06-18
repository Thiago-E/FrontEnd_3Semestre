import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "../assets/pages/login/login";
import CadastroFilmes from "../assets/pages/cadastroFilmes/cadastroFilmes";
import CadastroGeneros from "../assets/pages/cadastroGeneros/cadastroGeneros";
import PrivateRoute from "./PrivateRoutes";

const Rotas = () => {
    return (
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<Login />} />
                < Route path="/Filme"
                    element={
                        <PrivateRoute>
                            <CadastroFilmes />
                        </PrivateRoute>
                    } />
                < Route path="/Genero" 
                element={
                    <PrivateRoute>
                        <CadastroGeneros />
                    </PrivateRoute>
                } />
            </Routes>
        </BrowserRouter>

    )
}
export default Rotas
