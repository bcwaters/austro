import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import './bootstrap.css';
import NavComp from './components/NavComp.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="App-navbar"> <NavComp /></div>
        </header>
        <p className="App-intro">
          AstroAuction is coming
        </p>
      </div>
    
    );
  }
}

export default App;
