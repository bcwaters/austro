import React from 'react'
import { Card, CardImg, CardText,
  Button } from 'reactstrap';

export default class AuctionItemComp extends React.Component {

  setImgStyle(imgSrc) {
    //card size is 180w x 320h
    //img height max is .20*320
    var MAX_HEIGHT = 150;
    var MAX_WIDTH = 180;
    var newImg = new Image();
	  newImg.src = imgSrc; // this must be done AFTER setting onload
	  newImg.onload=function(){
    
	  console.log(imgSrc )
	  console.log(newImg)  
    console.log(newImg.naturalHeight + " " + newImg.natualWidth )
	  }

if(newImg.width>newImg.height)
    { //horizontal image so fill width
      console.log('h' + newImg.height);
      return {
        boxShadow: "3px 3px 3px 3px grey",
        margin: "5px",
        height: (MAX_WIDTH/newImg.naturalWidth)*newImg.naturalHeight,
        width: MAX_WIDTH,
        textAlign: "center"
      };
    }
      console.log('v' + newImg.width);
      return{ 
        boxShadow: "5px 5px 5px 5px grey",
        margin: "5px",
        textAlign: "center",
        height: MAX_HEIGHT,
        width:(MAX_HEIGHT/newImg.naturalHeight)*newImg.naturalWidth,
        };
}
	render()
	{
    var imgStyle= this.setImgStyle(this.props.imgPath)
    var titleStyle={fontSize: "large"}
    var descStyle = {fontSize: "small"}
    return( 

      <Card>
           <div className="image-wrap">
        <CardImg style={imgStyle} src={this.props.imgPath} alt="{this.props.imgPath}" /></div>
            <CardText style={titleStyle} className="text-center text-dark">{this.props.name}</CardText>
          <CardText style={descStyle}>{this.props.description}</CardText>
          <CardText className="text-dark">${this.props.bidAmount}<Button className="float-right" >Buy</Button></CardText>
        
      </Card>
    );
	}
};
