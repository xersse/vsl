
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <header className="header">
      <h1>E-commerce Formation</h1>
      <nav>
        <Link to="/">Présentation</Link>
        <Link to="/programme">Programme</Link>
        <Link to="/temoignages">Témoignages</Link>
      </nav>
    </header>
  );
}

export default Header;
