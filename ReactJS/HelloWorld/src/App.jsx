import Title from "./components/title/title";
import "./app.css";
import Paragrafo from "./components/paragrafo/paragrafo";
function App(){
    return(
        <>
      <Title nome="Eduardo" sobrenome="Costa" texto="Bem Vindo, sou Título" />
      <Title texto="Eu sou outro Título" />
      <Paragrafo textoParagrafo = "Lorem Ipsun dolor!!!" />        </>
    );
}

export default App;