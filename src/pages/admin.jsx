import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function App() {
    const [users, setUsers] = useState([]);
    const [visitorCount, setVisitorCount] = useState(0);
    const visit = Math.floor(visitorCount / 4);

    const fetchUsers = async () => {
        try {
            const response = await fetch('https://vsl-back.vercel.app/users');
            if (response.ok) {
                const data = await response.json();
                setUsers(data);
            } else {
                console.error('Erreur lors de la récupération des utilisateurs');
            }
        } catch (error) {
            console.error('Erreur lors de la récupération des utilisateurs', error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);



    const fetchVisitors = async () => {
        try {
            const response = await fetch('https://vsl-back.vercel.app/visitors');
            if (response.ok) {
                const data = await response.json();
                setVisitorCount(data.length);
            } else {
                console.error('Erreur lors de la récupération des visiteurs');
            }
        } catch (error) {
            console.error('Erreur lors de la récupération des visiteurs', error);
        }
    };

    useEffect(() => {
        fetchVisitors();
    }, []);

    return (
        <div className="users-list">
            <Link to="/" className='nav-link'>Acceuil</Link>
            <h2>Utilisateurs inscrits</h2>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>{user.name} - {user.email}</li>
                ))}
            </ul>
            <h2>Nombre total de visiteurs : {visit}</h2>
        </div>
    );
}

export default App;
