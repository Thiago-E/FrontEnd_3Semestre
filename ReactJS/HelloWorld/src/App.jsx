import Title from "./components/title/title";
import "./app.css";
import Paragrafo from "./components/paragrafo/paragrafo";
function App(){
    return(
        <>
        <Title texto = "Bem vindo, Sou Titulo"/>
        <Title texto = "Eu sou outro Titulo"/>
        <Paragrafo textoParagrafo = "loren 123"/>
        </>
    );
}

export default App;