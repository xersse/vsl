import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ setAuthenticated }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Vous pouvez remplacer ce mot de passe par un mot de passe plus sécurisé ou par une vérification serveur
    const correctPassword = 'admin123';
    
    if (password === correctPassword) {
      setAuthenticated(true);
      navigate('/admin');
    } else {
      setError('Mot de passe incorrect');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h1>Connexion Admin</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <label>
          Mot de passe:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}

export default Login;
