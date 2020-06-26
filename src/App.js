import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Chops Social Media Accounts, enjoy!
        </h1>
        <a
          className="App-link"
          href="https://www.facebook.com/David.kavana7"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        <a
          className="App-link"
          href="https://www.instagram.com/chops_and_dogs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          className="App-link"
          href="https://twitter.com/Dave_kav"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </header>
    </div>
  );
}

export default App;
