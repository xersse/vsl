
import { useState } from 'react';
import Gicon from "../assets/gicon.JPG";
import One from '../components/1';
import Two from '../components/2'
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
            <One />
            <Two />
            <Footer />
        </div>
        
        </div>
    );
}

export default Home;
