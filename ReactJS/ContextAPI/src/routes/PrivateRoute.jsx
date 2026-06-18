import { useContext } from 'react';
import { UsuarioContext } from '../context/UsuarioContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    //Recupera o state global do usuario(vem no UsuarioProvider )
    const {usuario} = useContext(UsuarioContext)

    return usuario ? children : <Navigate to='/' />
}

export default PrivateRoute