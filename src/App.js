import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navigation/Navbar.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <Navbar />
        </div>;
      </header>
      <main>

      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
