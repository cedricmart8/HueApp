import React, { Component } from 'react';
import logo from '../logo.svg';

class Accueil extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Acceuil
          </a>
        </header>
      </div>
    );
  }
}

export default Accueil;