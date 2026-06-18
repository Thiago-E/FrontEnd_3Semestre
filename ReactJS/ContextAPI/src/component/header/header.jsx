import { Link } from "react-router-dom";
import { useContext } from "react";
import { UsuarioContext } from "../../context/UsuarioContext";

const Header = () => {
        const {usuario} = useContext(UsuarioContext);
        const logout = () => {
            localStorage.removeItem("usuario")
        }
    return (
        <header>
            <nav>
                   <Link to={"/"}>Home</Link>(")
                   <Link to={"/perfil"}>Perfil</Link>(")
                     <Link to={"/produto"}>Produto</Link>(")
                     <Link to={"/cadastro-produto"}>Cadastrar Produto</Link>(")
                     <Link to={"/Lista-Produtos"}>Lista de Produtos</Link>(")
            </nav>
                <h2>Bem-Vindo, {usuario ? usuario : "Visitante"}!
                    <button onClick={logout}>
                        Sair
                    </button>
                </h2>

        </header>
    );
};

export default Header;