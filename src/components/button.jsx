
import React, { useState } from 'react';
import './button.css';

function Button() {
    const [email, setEmail] = useState("");
    const [prenom, setPrenom] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    // Fonction pour ouvrir la modale
    const openModal = () => {
      setIsOpen(true);
    };
  
    // Fonction pour fermer la modale
    const closeModal = () => {
      setIsOpen(false);
    };

  return (
    <div>
        <button className='button' onClick={openModal}>
            <strong>ACCÉDER À NOTRE MÉTHODE GRATUITEMENT</strong>
        </button>

        {isOpen && (
            <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={closeModal}>✖</button>
                <p className='titleModal'>
                    <b>Accédez à Notre Méthode Exclusive!</b>
                </p>
                <p className='subtitleModal'>Inscrivez-vous maintenant pour découvrir notre méthode.</p>
                <div className="send">
                <form>
                    <div className="group">
                        <input
                            type="text"
                            name="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            required
                            className="input_mail"
                        />
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Email</label>
                    </div>
                    <div className="group">
                    <input
                        type="text"
                        name="prenom"
                        value={prenom}
                        onChange={(event) => setPrenom(event.target.value)}
                        required
                        className="input_mail"
                        />
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Prénom</label>
                    </div>
                    <button type="submit" onClick={closeModal}>
                        <b>Cliquez ici</b>
                    </button>
                </form>
                </div>
            </div>
            </div>
        )}
    </div>
  );
}

export default Button;
