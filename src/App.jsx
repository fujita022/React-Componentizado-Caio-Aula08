import Header from './Componentes/Header';
import ConteudoPrincipal from './Componentes/ConteudoPrincipal';
import Footer from './Componentes/Footer'; 
import logo from './assets/vite.svg'
import { Outlet } from 'react-router-dom';

function App() {
 
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  )
}

export default App
