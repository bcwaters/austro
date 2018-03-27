import React from 'react'
import { Card, CardText } from 'reactstrap';
import ItemImg from './AuctionItemImg.js'
import ItemFooter from './AuctionItemFooter.js'

export default class AuctionItemComp extends React.Component {

  
	render()
	{
    var cardStyle = {backgroundColor: "#FFE1AD"}
    var titleStyle={fontSize: "large"}
    var descStyle = {fontSize: "small"}
    
    return( 

      <Card style={cardStyle}>
          <ItemImg imgPath={this.props.imgPath} />
          <CardText style={titleStyle} className="text-center text-dark">{this.props.name}</CardText>
          <CardText style={descStyle}>{this.props.description}</CardText>
          <ItemFooter bidAmount={this.props.bidAmount} />
      </Card>
    );
	}
};
