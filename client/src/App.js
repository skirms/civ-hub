import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRouter from './router/router';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3001/api/saveFiles')
      .then((response) => setMessage(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <main
          style={{ minHeight: '60vh', textAlign: 'center', padding: '2rem' }}
        >
          <AppRouter />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
