import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavComp from './components/NavComp.js';
import AuctionItem from './components/AuctionItemComp.js';
import AuctionItemList from './components/AuctionItemList';


export default class App extends Component {

  constructor(props) {
      super(props);
      this.sortItems=this.sortItems.bind(this);
      this.state = {
            auctionItems : this.retrieveAuctionItems()
          };}
     
  //Later an array of auctionItems will be retrieved from a database
  retrieveAuctionItems(){

    var auctionItems = [
      <AuctionItem key="1" description="Description of a painting goes here" name='Sunrise' bidAmount="50" imgPath="./SunsetPainting.jpg"/>,
      <AuctionItem key="2" name='Seasons' bidAmount="35" imgPath="./Seasons.jpg"/>,
      <AuctionItem key="3" description="Descriptaskldjf;aksjdfalksjdflakjsd;flkjasd;flkjas;dlfkja;sdjfla;sdjf;laskdjf;alskdjf;laskdjf;laskjfd;laskdjf;lakjsdf;ion of a painting goes here" name='fall' bidAmount="55" imgPath="./fall.jpg"/>,
      <AuctionItem key="4" name='winter' bidAmount="75" imgPath="./winter.jpg"/>,
      <AuctionItem key="5" description="Description of a painting goes here" name='spring' bidAmount="40" imgPath="./spring.jpg"/>,
      <AuctionItem key="6" name='summer' bidAmount="85" imgPath="./summer.jpg"/>]
      return auctionItems;
  }

  sortItems(sortType) {
    console.log(sortType)
      const items = this.state.auctionItems.slice();
      if (sortType === "cheap")
      items.sort(function(a,b){return a.props.bidAmount - b.props.bidAmount})
      if (sortType === "expensive")
      items.sort(function(a,b){return b.props.bidAmount - a.props.bidAmount})
      
    this.setState({
    auctionItems : items})
  }

  render() {
     var navComp =<NavComp  onClick={this.sortItems}/>
  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="App-navbar" > {navComp}</div>
         </header>
         <AuctionItemList auctionItems={this.state.auctionItems} />
      </div>    
    );
  }
}

 
