import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navigation/Navbar.js';

function App() {
  return (
    <div className="App">
      <header>
        <div>
          <Navbar />
        </div>
      </header>
      <main className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
