import React from 'react'
import { Card, CardText,
  Button } from 'reactstrap';
  import ItemImg from './AuctionItemImg'

export default class AuctionItemComp extends React.Component {

  
	render()
	{
    
    var titleStyle={fontSize: "large"}
    var descStyle = {fontSize: "small"}
    return( 

      <Card>
          <ItemImg imgPath={this.props.imgPath} />
          <CardText style={titleStyle} className="text-center text-dark">{this.props.name}</CardText>
          <CardText style={descStyle}>{this.props.description}</CardText>
          <CardText className="text-dark">${this.props.bidAmount}<Button className="float-right" >Buy</Button></CardText>
        
      </Card>
    );
	}
};
