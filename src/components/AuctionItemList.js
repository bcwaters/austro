import React from 'react'
import { CardDeck } from 'reactstrap';

export default class AuctionItemList extends React.Component {
	
	render()
	{

		return( 
		<div className = "container">
      		<div className = "row">
       		{this.props.auctionItems}
      		</div>
      	</div> );
	}
};
