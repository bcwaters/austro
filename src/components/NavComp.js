import React from 'react'
import {
  Nav,
  Navbar,
  NavbarBrand,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class NavComp extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar expand="md">
        <NavbarBrand href="/">Astro Auction</NavbarBrand>
          <Nav className="ml-auto" navbar>
              <Dropdown nav inNavbar 
              isOpen={this.state.isOpen} toggle={this.toggle}>
                <DropdownToggle nav caret>
                  Sort
                </DropdownToggle>
                <DropdownMenu float="left" position="static">
                  <DropdownItem onClick={() => alert("hi")}>
                    Cheapest First
                  </DropdownItem>
                  <DropdownItem onClick={() => alert('bye')}>
                    Most Expensive First
                  </DropdownItem>  
                </DropdownMenu>
              </Dropdown>
              </Nav>
        </Navbar>
      </div>
    );
  }
}