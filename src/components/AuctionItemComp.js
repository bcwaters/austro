import React from 'react'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardFooter,  Button } from 'reactstrap';

export default class AuctionItemComp extends React.Component {
	
	render()
	{
		return( 
		<div class= "AuctionItem">
      <Card>
        <CardImg top width="100%" src={this.props.imgPath} alt="{this.props.imgPath}" />
        <CardBody>
          <CardTitle className="text-center">{this.props.name}</CardTitle>
          <CardText>{this.props.description}</CardText>
          <CardText>$35<Button className="float-right" >Buy</Button></CardText>
        </CardBody>
      </Card>
    	</div>
    );
	}
};
