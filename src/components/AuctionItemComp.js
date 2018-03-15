import React from 'react'

export default class AuctionItemComp extends React.Component {
	constructor(props){
		super(props);
		this.state ={
			date: new Date()
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
		return <h1>
			<div>Item:{this.props.name}</div>
			<div>AuctionEndsAt:{this.state.date.toLocaleTimeString()}</div>
		</h1>;
	}
};
