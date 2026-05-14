import { useState } from "react"
import Contador from "./components/contador/contador"
import CadFruta from "./components/cadfruta/cadfruta"
import CicloDeVida from "./components/ciclodevida/ciclodevida"

export const App = () => {
  const [mostrar, setMostrar] = useState(true)

  //objeto privado do componente 
  const [nome, setNome] = useState("Google")
  
  function trocartexto(){
    setNome("Microsoft")
  }
  
  function fuiAbandonado(){
    setNome("Fui abandonado")
  }




  return(
    <>
    {/* <h1>{nome} Page</h1>
    <button onClick={trocartexto}>Mudar Nome</button>
    <button onClick={() => {
      setNome("Yahoo")
    }}>Mudar Nome</button>

    <br />
    {/* evento - evento disparado: change */}
    {/* target - quem disparou o evento */}
    {/* value - valor do input que disparou o evento */}
    {/* <input type="text" onBlur={fuiAbandonado} onChange={(e)=> setNome(e.target.value)} /> */}
  
    {/* <Contador />
    <br />
    <p>lorem ipsum <strong>{nome}</strong> dolor sit amet</p> */ }
    {/* <CadFruta/>  */}
    <button onClick={() => {
      setMostrar(!mostrar)
    }}></button>
    {mostrar && <CicloDeVida/>}  
    </>

  )
}

export default App