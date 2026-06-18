import { useEffect, useState } from "react";
import { UsuarioContext } from "../Context/UsuarioContext";

export const UsuarioProvider = ({ children }) => {
    const [email, setEmail] = useState(null);

    useEffect(() => {
        const emailLogado = JSON.parse(localStorage.getItem("email"))
        setEmail(emailLogado)
    }, [])

    return (
        <UsuarioContext.Provider
            value={{
                email,
                setEmail
            }}
         >

            {children}
        </UsuarioContext.Provider>
    )
}