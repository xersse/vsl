
import { useState } from 'react';
import Gicon from "../assets/gicon.JPG";
import Footer from '../components/footer';
import './home.css';

function Home() {
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');

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
            window.location.href = 'https://www.skool.com/genesis-ecom-5607/about';
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
            <h1>Remplis tes informations pour accéder à la vidéo qui va te faire passer de zéro à 5000 € en moins de 30 jours</h1>
            
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
            
        </div>
        <Footer />
        </div>
    );
}

export default Home;
