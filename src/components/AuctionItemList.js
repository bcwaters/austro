import React from 'react'
import { CardDeck } from 'reactstrap';

export default class AuctionItemList extends React.Component {
	render()
	{
		return( 
		<div>
      <CardDeck>
        {this.props.children}
      </CardDeck>
      	</div>
    	
    );
	}
};
