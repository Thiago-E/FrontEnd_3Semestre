import "./menu.css"
import Cardperfil from "../card-perfil/cardperfil";
function Menu() {
    return (

        
        //  <!-- block/bloco/componente -->
        <nav className="mae">
      <a href="#" className="mae__filho">Home</a>
      <a href="#" className="mae__filho">Quem Somos</a>
      <a href="#" className="mae__filho">Contato</a>
      <a href="#" className="mae__filho mae__filho--success">Entrar</a>
      <a href="#" className="mae__filho mae__filho--button-default">Cadastrar</a>

      <Cardperfil/>
      
    </nav>


);
}

export default Menu;