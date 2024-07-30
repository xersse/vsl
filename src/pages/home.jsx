
import { useState } from 'react';
import Gicon from "../assets/gicon.JPG";
import Footer from '../components/footer';
import './home.css';
import { Link } from 'react-router-dom';

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
            <h1>Cette vidéo peut de faire encaisser 5000€ en moins de 30 jours si tu l&apos;écoutes attentivement</h1>
            <h3>Entre t&apos;es information pour d&apos;écouvrire la méthode que nous utilisons et démare t&apos;on guide gratuit</h3>
            {submitted ? (
                <div className='submitted'>
                    <h2>Merci pour votre inscription !</h2>
                    <Link to="/video" className='nav-link'>Clique ici pour voir le programme</Link>
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
