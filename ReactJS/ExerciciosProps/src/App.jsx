import "./App.css"
import Saudacao from "./components/exercicio-1/saudacao"
import Produto from "./components/exercicio-2/produto";
import Perfil from "./components/exercicio-3/Perfil";
import Botao from "./components/exercicio-4/botao";
import Filme from "./components/exercicio-5/FIlme";
import Aluno from "./components/exercicio-6/Aluno"
import MeuCard from './components/Exercicio7/Card';
import Contato from './components/Exercicio8/Contato';
import Jogo from './components/Exercicio9/Jogo';
import ItemLoja from './components/Exercicio10/ItemLoja';

const Pessoas = [
{
  id: 1,
  nome: "Lucas",
  idade: 25,
  profissao: "Desenvolvedor"
},
{
  id: 2,
  nome: "Matheus",
  idade: 30,
  profissao: "Designer"
},
{
  id: 3,
  nome: "Pedro",
  idade: 28,
  profissao: "Analista de Dados"
}
]

const App = () => {
  return(
    <>
    {/* <Saudacao nome="Eduardo"/>
    <Saudacao nome="Renato"/>
    <Saudacao nome="Maria"/> */}


    {/* <Produto nomeProduto= "Detergente" Preco={12} DProduto="Um detergente otimo para eliminar bacterias"/>
    <Produto nomeProduto= "Headset" Preco={120} DProduto="Um headset com um som otimo para jogos"/>
    <Produto nomeProduto= "Cadeira Gamer" Preco={590} DProduto="Uma otima cadeira para jogos e para ficar confortavel"/> */}


  {/* <nav className="Card">

    <Perfil 
    nome="Luiz"
    idade={19}
    profissao="Engenheiro"
    />
    </nav> */}


      {/* <botao texto="Botão Vermelho" cor="vermelho" /> */}


    {/* <Filme
      titulo= "Ben 10"
      ano={2008}
      genero= "Ação,Fantasia"
      nota={8.60}
    />  */}

     {/* <Aluno nome="Lucas" curso="Engenharia de Software" imagem={imagemAluno} />
      <Aluno nome="Matheus" curso="Engenharia de Software" imagem={imagemAluno} />
      <Aluno nome="Pedro" curso="Engenharia de Software" imagem={imagemAluno} /> */}
      
      {/* <MeuCard> 
      <Saudacao nome="Lucas" />
      </MeuCard>
      <MeuCard> 
      <Saudacao nome="Matheus" />
      </MeuCard>
      <MeuCard> 
      <Saudacao nome="Pedro" />   
      </MeuCard>    */}

      {/* <Contato nome="Lucas" telefone="(11) 99999-9999" email="lucas@example.com" />
      <Contato nome="Matheus" telefone="(11) 99999-9999" email="matheus@example.com" />
      <Contato nome="Pedro" telefone="(11) 99999-9999" email="pedro@example.com" /> */}
  
      {/* <Jogo nome="The Legend of Zelda: Breath of the Wild" plataforma="Nintendo Switch" preco={299.99} imagem={imagemAluno} />
      <Jogo nome="Super Mario Odyssey" plataforma="Nintendo Switch" preco={199.99} imagem={imagemAluno} />
      <Jogo nome="Sonic Mania" plataforma="PS4" preco={59.99} imagem={imagemAluno} /> */}

        {/* <ItemLoja nome="Notebook Gamer" preco={4500.00} categoria="Eletrônicos" estoque={10}/>
        <ItemLoja nome="Smartphone" preco={2500.00} categoria="Eletrônicos" estoque={0}/>
        <ItemLoja nome="Fone de Ouvido" preco={150.00} categoria="Acessórios" estoque={5}/> */}
      </>

  
//   Pessoas.map(pessoa => (
//     <Perfil key={pessoa.id} nome={pessoa.nome} idade={pessoa.idade} profissao={pessoa.profissao} /> 
//   )
// )
  )
}

export default App;