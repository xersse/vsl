
import { useState } from 'react';
import Gicon from "../assets/gicon.JPG";
import Footer from '../components/footer';
import './home.css';

function Home() {
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const response = await fetch('https://vsl-back.vercel.app/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: firstName, email }),
          });
    
          if (response.ok) {
            setSubmitted(true);
          } else {
            console.error('Erreur lors de l\'ajout de l\'utilisateur');
          }
        } catch (error) {
          console.error('Erreur lors de l\'ajout de l\'utilisateur', error);
        }
      };

    return (
        <div>
        <div className="home">
            <img src={Gicon} alt="Icon de la marque" />
            <h1>Cette vidéo peut te faire encaisser 5000€ en moins de 30 jours si tu l&apos;écoutes attentivement</h1>
            <h3>Entre tes informations pour découvrir la méthode que nous utilisons et démarre ton guide gratuit</h3>
            {submitted ? (
                <div className='submitted'>
                    <h2>Merci pour votre inscription !</h2>
                    <a href="https://www.notion.so/Guide-Gratuit-E-com-aaf094cece044c6f854819edb3ecca48?pvs=4" className='nav-link'>Clique ici accéder au guide gratuit</a>
                    <a href="https://www.skool.com/genesis-ecom-5607/about" className='nav-link'>Clique ici pour voir la vidéo</a>
                </div>
            ) : (
            <form onSubmit={handleSubmit} className="input">
                <input 
                type="text" 
                name="firstName" 
                placeholder="Prénom" 
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                />
                <input 
                type="email" 
                name="mail" 
                placeholder="Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <button type='submit'>J&apos;accéde à la vidéo dès maintenant</button>
            </form>
            )}
            
        </div>
        <Footer />
        </div>
    );
}

export default Home;
