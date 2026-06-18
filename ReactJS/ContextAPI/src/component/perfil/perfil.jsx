 	import { useContext } from "react"
import { UsuarioContext } from "../../context/UsuarioContext"
import { useState } from "react"

const Perfil = () => {
    // context - destructuring
    const { usuario, setUsuario } = useContext(UsuarioContext)

    // states e variáveis
    const [novoUsuario, setNovoUsuario] = useState("")

    // ciclo de vida e funções
    //guarda o usuário no localStorage no formato JSON
    const login = () => {
        // pega o dado e coloca no storage
        localStorage.setItem("usuario", JSON.stringify(novoUsuario)) 
        setUsuario(novoUsuario)
        setNovoUsuario("") // limpa os dados do formulário
    }

    return (
        <div>

            <h2>Página de Perfil( {usuario} )</h2>

            <input type="text" 
            placeholder="digite o novo usuário"
           c
            />

            <button 
            onClick={() => {
                login()
            }}
            >
                Entrar
            </button>
            <p>Novo Usuário: <strong>{novoUsuario}</strong></p>
        </div>
    )
}

export default Perfil