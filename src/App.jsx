
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/footer';
import Home from './pages/home';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
