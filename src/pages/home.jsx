
import Gicon from "../assets/gicon.JPG";
import './home.css';

function Home() {
    return (
        <div className="home">
            <img src={Gicon} alt="Icon de la marque" />
            <h1>Cette vidéo peut de faire encaisser 5000€ en moins de 30 jours si tu l&apos;écoutes attentivement</h1>
            <h3>Entre t&apos;es information pour d&apos;écouvrire la méthode que nous utilisons et démare t&apos;on guide gratuit</h3>
            <div className="input">
                
                <input type="text" name="name" placeholder="Prénom" />
                <input type="email" name="mail" placeholder="Email" />
                <button>J&apos;accéde à la vidéo dès maintenant</button>
            </div>
        </div>
    );
}

export default Home;
