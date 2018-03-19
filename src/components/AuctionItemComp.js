import React from 'react'
import { Card, CardImg, CardText, CardBody,
  CardTitle, Button } from 'reactstrap';

export default class AuctionItemComp extends React.Component {
	
	render()
	{
		return( 
      <Card>
        <CardImg src={this.props.imgPath} alt="{this.props.imgPath}" />
        <CardBody>
          <CardTitle className="text-center">{this.props.name}</CardTitle>
          <CardText>{this.props.description}</CardText>
          <CardText className="align-bottom">$35<Button className="float-right" >Buy</Button></CardText>
        </CardBody>
      </Card>
    );
	}
};
