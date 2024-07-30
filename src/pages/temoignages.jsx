import { useState } from 'react';

function Guide() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="guide">
      {submitted ? (
        <h2>Merci pour votre inscription ! Le guide vous a été envoyé par email.</h2>
      ) : (
        <form onSubmit={handleSubmit} className="form-container">
          <h2>Recevez votre guide gratuit</h2>
          <label>
            Prénom:
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <button type="submit">Recevoir le guide</button>
        </form>
      )}
    </div>
  );
}

export default Guide;
