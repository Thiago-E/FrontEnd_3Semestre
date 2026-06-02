import Rotas from "../../../routes/routes"
import "./cadastroFilmes.css"
import Header from "../../../components/header/header"
import Footer from "../../../components/footer/Footer"
import Cadastro from "../../../components/cadastro/Cadastro"
import { useEffect, useState } from "react"
import api from "../../../Services/services.js"
import Lista from "../../../components/lista/Lista"
import { Alerta } from "../../../components/alerta/alerta.jsx"

import Swal from "sweetalert2"//


const CadastroFilmes = () => {

    // states e variáveis
    const [valor, setValor] = useState("")
    const [listaFilmes, setListaFilmes] = useState([])

    const [listaGeneros, setListaGeneros] = useState([
        { id: 1, nome: "Romance" },
        { id: 2, nome: "Ação" },
        { id: 3, nome: "Comédia" },
        { id: 4, nome: "Drama" }
    ])
    const [generoSelecionado, setGeneroSelecionado] = useState("")
    const [editar, setEditar] = useState(false)
    const [idEditarFilme, setIdEditar] = useState([])

    // funções
    const cadastrarFilme = async (e) => {
        e.preventDefault();

        if (valor.trim().length === 0) {
            Alerta({
                title: "Cadastro de Filme",
                text: "O campo nome é obrigatório e não pode estar vazio.",
                icon: "warning",
                confirmButtonText: "Ok"
            })
            return false;
        }
console.log("Título:", valor)
console.log("Gênero:", generoSelecionado)

const objCadastro = {
    titulo: valor,
    genero: {
        nome: generoSelecionado
    }
}

console.log(objCadastro)


        try {
            const retornoAPI = await api.post("/Filmes", objCadastro)

            if (retornoAPI.status === 201) {
                Alerta({
                    title: "Cadastro de Filme",
                    text: `Filme (${objCadastro.titulo}) cadastrado com sucesso!`,
                    icon: "success"
                })
                setValor("")

                getFilmes()
            } else {
                alert("Erro ao cadastrar filme")
            }

        } catch (erro) {
            console.erro("Erro ao cadastrar filme:");
            console.log(erro)
        }
    }

    const limparFormulario = () => {
        setValor("")
        setEditar(false)

        setIdEditar(0)
    }

    const excluirFilme = async (item) => {
        //validação do formulario
        const result = await Alerta({
            title: "Exclusão de Filme",
            text: `Tem certeza que deseja excluir o filme (${item.titulo})?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sim, excluir!",
            cancelButtonText: "Cancelar"
        });

        if (!result.isConfirmed) {
            return false;
        }


        try {
            const retornoAPI = await api.delete(`/Filmes/${item.id}`)//chama a api para excluir o filme

            if (retornoAPI.status === 204 || retornoAPI.status === 200) {
                Alerta({
                    title: "Exclusão de Filme",
                    text: `Filme (${item.nome}) excluído com sucesso!`,
                    icon: "success",

                })
                getFilmes()
            }
            console.log(retornoAPI)
            getFilmes()

        } catch (error) {
            Alerta({
                title: "Exclusão de Filme",
                text: `Não foi possível excluir o filme (${item.titulo}). Ele pode estar associado a um gênero!`,
                icon: "error"
            })
        }

    }

   const preEditar = (item) => {
    setValor(item.titulo)
    setGeneroSelecionado(item.genero.nome)
    setIdEditar(item.id)
    setEditar(true)
}

    //limpar o formulario e esconder o botao
    const cancelarPreEditar = () => {
        setEditar(false)
        setValor("")
        setIdEditar([])
    }

   const editarFilme = async (e) => {
    e.preventDefault();

    const objEditar = {
        titulo: valor,
        genero: {
            nome: generoSelecionado
        }
    }

    try {
        const retornoAPI = await api.put(
            `/Filmes/${idEditarFilme}`,
            objEditar
        )

        console.log(retornoAPI)

        if (retornoAPI.status === 200) {
            Alerta({
                title: "Edição de Filme",
                text: "Filme editado com sucesso!",
                icon: "success",
                confirmButtonText: "Ok"
            });

            limparFormulario()
            getFilmes()
        }

    } catch (error) {
        console.error(error)
    }
}

    useEffect(() => {
        //chamar os dados da api
        getFilmes()
    }, [])

    const getFilmes = async () => {
        try {
            const retornoAPI = await api.get("/Filmes")//chama a api
            const dados = retornoAPI.data//extrai os dados retornados
            setListaFilmes(dados)//guarda os dados no state(ja exibe na lista)
        }
        catch (error) {
            console.error("Erro ao buscar filmes:");
        }
    }

    // JSX
    return (
        <>
            <Header />

            <main>
                <Cadastro
                    tituloCadastro="Cadastro de Filmes"
                    placeholder="Nome do Filme"
                    valor={valor}
                    setValor={setValor}
                    generoSelecionado={generoSelecionado}   
                    setGeneroSelecionado={setGeneroSelecionado}
                    cancelarEdicao={limparFormulario}
                    funcCadastro={editar ? editarFilme : cadastrarFilme}
                    btneditar={editar}
                    listaGeneros={listaGeneros}
                />
                <Lista
                    tituloLista="Lista de Filmes"
                    // visibilidade="none"
                    lista={listaFilmes}
                    //chama o metodo para validar
                    tipoLista="filme"
                    funcExcluir={excluirFilme}
                    funcPreEditar={preEditar}
                />

            </main>

            <Footer />
        </>
    )
}

export default CadastroFilmes