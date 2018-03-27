import React from 'react'
import {CardText, Button} from 'reactstrap'

export default class AuctionItemFooter extends React.Component
{
	
	render(){
		var footerStyle = {
		
			}
		return(
			<CardText style={footerStyle} className="text-dark">
			${this.props.bidAmount}
				<Button className="float-right" >Buy</Button>
			</CardText>
        )
	}
}