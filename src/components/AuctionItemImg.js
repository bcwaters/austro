import React from 'react'
import ReactDOM from 'react-dom'
import {CardImg} from 'reactstrap';

export default class AuctionItemImg extends React.Component {
	constructor(props) {
    super(props);
    this.state = { 
    	loaded: false,
    	imageStyle: {height:"50px", width:"50px"} };
    this.handleImageLoaded = this.handleImageLoaded.bind(this);
}

componentDidMount() {
    const img = ReactDOM.findDOMNode(this);
    if (img.complete) {
        this.handleImageLoaded();
    }
}

handleImageLoaded() {
    if (!this.state.loaded) {
        var style =this.setImgStyle(ReactDOM.findDOMNode(this).lastChild)
        this.setState({ loaded: true,
        				 imgStyle:style});
    }
} 

	setImgStyle(newImg) {
    var MAX_HEIGHT = 150;
    var MAX_WIDTH = 180;
    var natHeight = newImg.naturalHeight
    var natWidth = newImg.naturalWidth
	if(natWidth>natHeight){ //horizontal image so fill width
      	return {
        boxShadow: "3px 3px 3px 3px grey",
        margin: "5px",
        height: (MAX_WIDTH/newImg.naturalWidth)*newImg.naturalHeight,
        width: MAX_WIDTH,
        textAlign: "center"
      };
    }
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
	 	
		return(
			<div className="image-wrap">
				<CardImg style={this.state.imgStyle} src={this.props.imgPath} alt="{this.props.imgPath}" onLoad={this.handleImageLoaded} />
			</div>
			)
	}

}