import { useEffect, useState } from "react"
import "./ciclodevida.css"

export default function CicloDeVida(){
    const [contador,setContador] = useState(0);
    useEffect(() =>{
        // quando o componente é montado~
        console.log("Componente MONTADO");

        return () => {
            console.log("Componente Desmontado")
        }
    }, [])
    
    useEffect(() => {
        console.log("Componente Atualizado");
        console.log(`Valor do contador ${contador}`);
        
    },[contador])
    
    
    
    return(
    <>
    <h1>Contador: {contador}</h1>
    <button onClick={() => {
        setContador(contador + 1);
    }}>Contar</button>
    </>
    )
}