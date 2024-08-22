import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Meu site</h1>
      <nav>
            <ul className="header-info">
            <li><Link to='/Sobre'>Home</Link></li>
            <li><Link to='/Sobre'>Sobre</Link></li>
            <li><Link to='/Sobre'>Serviços</Link></li>
            <li><Link to='/Sobre'>Contato</Link></li>
            </ul>
        </nav>
    </header>
  );
}

export default Header;
