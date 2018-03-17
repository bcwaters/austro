import React from 'react'
import { CardGroup } from 'reactstrap';

export default class AuctionItemList extends React.Component {
	render()
	{
		return( 
		<div class= "AuctionItemList">
      <CardGroup>
        {this.props.children}
      </CardGroup>
    	</div>
    );
	}
};
