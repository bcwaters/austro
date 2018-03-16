import React from 'react'

export default class AuctionItemComp extends React.Component {
	constructor(props){
		super(props);
		this.state ={
			date: new Date(),		
		};
	}

  	componentDidMount() {
  		this.timerID = setInterval(
      		() => this.tick(),
      		1000
    );
  	}

  	componentWillUnmount() {	
  		  clearInterval(this.timerID);
  	}

  	tick() {
    this.setState({
      date: new Date()
    });}

	render()
	{
		return <div class="AuctionItem">
			<div>Item: <a href="/">{this.props.name}</a></div>
			<div><img class="AuctionImg" src={this.props.imgPath} alt="paint"/></div>
			<div>Auction ends at: {this.state.date.toLocaleTimeString()}</div>
			<div>Current bid: {this.props.bidAmount}</div>

		</div>;
	}
};
