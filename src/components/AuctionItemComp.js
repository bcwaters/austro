import React from 'react'
import { Card, CardText } from 'reactstrap';
import ItemImg from './AuctionItemImg.js'
import ItemFooter from './AuctionItemFooter.js'
import ItemDescription from './AuctionItemDescription.js'

export default class AuctionItemComp extends React.Component {

  
	render()
	{
    var cardStyle = {backgroundColor: "#FFE1AD"}
    var titleStyle={fontSize: "large"}
   
    
    return( 

      <Card style={cardStyle}>
          <ItemImg imgPath={this.props.imgPath} />
          <CardText style={titleStyle} className="text-center text-dark">{this.props.name}</CardText>
          <ItemDescription description={this.props.description} />
          <ItemFooter bidAmount={this.props.bidAmount} />
      </Card>
    );
	}
};
