import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
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

  alertUser(themeSent){return alert('Theme' + themeSent + 'selected');}


  render() {
    return (
      <div>
        <Navbar expand="md">
          <NavbarBrand href="/">Astro Auction</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/empty">EmptyLink</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/bcwaters/austro">Github</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Page Theme
                </DropdownToggle>
                <DropdownMenu >
                  <DropdownItem onClick={() =>this.alertUser('1')}>
                    Theme 1
                  </DropdownItem>
                  <DropdownItem onClick={() =>this.alertUser('2')}>
                    Theme 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}