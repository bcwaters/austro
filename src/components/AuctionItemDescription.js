import React from 'react'
import {CardText} from 'reactstrap'

export default class AuctionItemDescription extends React.Component
{
	constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false,
      descStyle: {fontSize: "small", height: "100px", zIndex:"0"}}
    };
  

  handleMouseHover() {

    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
  	var updatedStyle;
  	state.isHovering?
  	updatedStyle={zIndex:"0"}
  	:updatedStyle={	zIndex:"1000",
  	 				border:"solid #57C4AF",
  	 				borderRadius:"2px",
  	 				position: "absolute",
  	 				minHeight: "80%",
  	 				width: "100%"}
    return {
      isHovering: !this.state.isHovering,
      descStyle:updatedStyle};
  }

	
	render(){
	
		return(
			 <CardText style={this.state.descStyle} onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseHover}><a href="">Description: </a>{this.props.description}
          {this.state.isHovering && " WOW! unhover to minimize"}
  			</CardText>
        )
	}
}