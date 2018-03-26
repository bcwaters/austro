import React from 'react'
import { Card, CardImg, CardText, CardBody,
  CardTitle, Button } from 'reactstrap';

export default class AuctionItemComp extends React.Component {

  setImgStyle(imgSrc) {
    //card size is 180w x 320h
    //img height max is .20*320
    var MAX_HEIGHT = 180;
    var newImg = new Image();
    newImg.src = imgSrc; // this must be done AFTER setting onload
    console.log(newImg.height + " " + newImg.width )

if(newImg.width>newImg.height)
    { //horizontal image so fill width
      console.log('h' + newImg.height);
      return {
        boxShadow: "5px 10px",
        height: .2*320,
        width: "100%",
        align: "center"
      };
    }
      console.log('v' + newImg.width);
      return{ 
        boxShadow: "5px 5px 5px 5px grey",
        margin: "5px",
        textAlign: "center",
        height: MAX_HEIGHT,
        width:(newImg.height/newImg.width)*160,
        };
}
	render()
	{
    var imgStyle= this.setImgStyle(this.props.imgPath)
		return( 
      <Card>
            <div className="imageWrap">
        <CardImg style={imgStyle} src={this.props.imgPath} alt="{this.props.imgPath}" /></div>
        <CardBody>
          <CardTitle className="text-center text-dark">{this.props.name}</CardTitle>
          <CardText className="text-dark">{this.props.description}</CardText>
          <br></br>
          <CardText className="text-dark">${this.props.bidAmount}<Button className="float-right" >Buy</Button></CardText>
        </CardBody>
      </Card>
    );
	}
};
