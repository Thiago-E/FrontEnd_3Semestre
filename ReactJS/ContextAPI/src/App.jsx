import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import PrivateRoute from './routes/PrivateRoute'
import Perfil from './component/perfil/perfil'
import Home from './component/home/home'
import Header from './component/header/header'
import Produto from './component/produto/produto'
import CadastroProduto from './component/Cadastro/CadastroProduto'
import './App.css'
import ListaProduto from './component/ListarProduto/ListaProduto'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        
          <Route path='/' element={<Home />} />
          <Route path='/perfil' element={<Perfil />} />
          <Route path='/produto' element={<Produto />} />
          <Route path='/cadastro-produto' element={
            <PrivateRoute>
              <CadastroProduto />
            </PrivateRoute>
            } />
          <Route path='/Lista-Produto' element={
            <PrivateRoute>
              <ListaProduto />
            </PrivateRoute>
            } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
