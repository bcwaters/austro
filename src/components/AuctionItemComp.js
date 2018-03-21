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
          <CardTitle className="text-center text-dark">{this.props.name}</CardTitle>
          <CardText className="text-dark">{this.props.description}</CardText>
          <br></br>
          <CardText className="text-dark">$35<Button className="float-right" >Buy</Button></CardText>
        </CardBody>
      </Card>
    );
	}
};
