import { useContext } from 'react';
import { UsuarioContext } from '../Context/UsuarioContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    //Recupera o state global do usuario(vem no UsuarioProvider )
    const {email} = useContext(UsuarioContext)

    return email ? children : <Navigate to="/" />
}

export default PrivateRoute