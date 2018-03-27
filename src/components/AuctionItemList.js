import React from 'react'

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
