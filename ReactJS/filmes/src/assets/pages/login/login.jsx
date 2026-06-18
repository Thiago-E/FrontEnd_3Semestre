import "./Login.css";
import Logo from "../../img/logo.svg";
import Botao from "../../../components/Botao/Botao";
import Header from "../../../components/header/header";
import Footer from "../../../components/footer/Footer";
import { UsuarioContext } from "../../../Context/UsuarioContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const { email, setEmail } = useContext(UsuarioContext)
    const navigate = useNavigate()



    // states e variáveis
    const [novoEmail, setNovoEmail] = useState("")

    // ciclo de vida e funções
    //guarda o usuário no localStorage no formato JSON
    const EmailLogin = () => {
        // pega o dado e coloca no storage
        console.log("Email:", novoEmail);
        localStorage.setItem("email", JSON.stringify(novoEmail))
        setEmail(novoEmail)
        navigate("/Filmes")
        setNovoEmail("") // limpa os dados do formulário
    }

    return (
        <>
            <Header />
            <main className="main_login">
                <div className="banner"></div>
                <section className="section_login">
                    <img src={Logo} alt="Logo do Filmoteca" />
                    <form action="" 
                    className="form_login"
                    onSubmit={(e) => {
                        e.preventDefault()
                        EmailLogin()
                    }}>
                        <h1>Login</h1>
                        <div className="campos_login">
                            <div className="campo_input">
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Digite seu e-mail"
                                    value={novoEmail}
                                    onChange={(e) => 
                                        setNovoEmail(e.target.value)
                                    }
                                />
                            </div>
                            <div className="campo_input">
                                <label htmlFor="senha">Senha:</label>
                                <input
                                    type="password"
                                    name="senha"
                                    placeholder="Digite sua senha"
                                    
                                />
                            </div>
                        </div>
                        <Botao
                        onClick={() => {
                            console.log("função de login")
                        }}
                        nomeDoBotao="Entrar"
                        />
                    </form>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Login