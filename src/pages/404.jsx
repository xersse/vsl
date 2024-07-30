
import { Link } from 'react-router-dom';
import './404.css';

function Error() {


  return (
    <div>
      <Link to="/" className='nav-link'>Accueil</Link>
      <div className="E404">

        <h1>Erreur 404</h1>
      </div>
    </div>
  );
}

export default Error;
