import { useState } from "react";
import { UsuarioContext } from "./UsuarioContext";

export const UsuarioProvider = ({ children }) => {
    const [usuario, setUsuario] = useState("Thiago");
    return (
        <UsuarioContext.Provider
            value={{
                usuario,
                setUsuario
            }}
         >

            {children}
        </UsuarioContext.Provider>
    )
}