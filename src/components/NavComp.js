import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
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
              <Dropdown nav inNavbar isOpen={this.state.isOpen} toggle={this.toggle} >
                <DropdownToggle nav caret mr-auto>
                  Options
                </DropdownToggle>
                <DropdownMenu >
                  <DropdownItem onClick="">
                    Theme 1
                  </DropdownItem>
                  <DropdownItem onClick="">
                    Theme 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
        </Navbar>
      </div>
    );
  }
}