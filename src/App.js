import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavComp from './components/NavComp.js';
import AuctionItem from './components/AuctionItemComp.js'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="App-navbar"> <NavComp /></div>
        </header>
        <div class="AuctionItemList"><AuctionItem name='Sunrise' bidAmount="$50" imgPath="./SunsetPainting.jpg"/></div>
        <div class="AuctionItemList"><AuctionItem name='Seasons' bidAmount="$35" imgPath="./Seasons.jpg"/></div>
      </div>
    
    );
  }
}

 
