import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavComp from './components/NavComp.js';
import AuctionItem from './components/AuctionItemComp.js';
import AuctionItemList from './components/AuctionItemList';

export default class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="App-navbar"> <NavComp /></div>
        </header>
        <AuctionItemList><AuctionItem description="Description of a painting goes here" name='Sunrise' bidAmount="$50" imgPath="./SunsetPainting.jpg"/>
        <AuctionItem name='Seasons' bidAmount="$35" imgPath="./Seasons.jpg"/></AuctionItemList>
      </div>
    
    );
  }
}

 
