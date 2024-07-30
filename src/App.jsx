
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/home';
import Video from './pages/vidéo';
import Admin from './pages/admin';
import Login from './components/loginAdmin';
import E404 from './pages/404';
import './App.css';

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const logVisitor = async () => {
      try {
        await fetch('https://vsl-back.vercel.app/log-visitor', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
          }),
        });
      } catch (error) {
        console.error('Failed to log visitor', error);
      }
    };

    logVisitor();
  }, []);
  return (
    <Router>
      <div className="App">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/video" element={<Video />} />
            <Route path="/login" element={<Login setAuthenticated={setAuthenticated} />} />
            <Route
            path="/admin"
            element={
              authenticated ? <Admin /> : <Navigate to="/login" />
            }
            />
            <Route path="*" element={<E404 />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
