import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavItems } from '~/components/Nav';
import { Logo } from '~/components/Logo';

const navList = [
  {
    to: '/signup',
    key: 'SignUp'
  },
  {
    to: '/SignIn',
    key: 'SignIn'
  }
];

class HeaderNavbar extends Component {
  render() {
    return (
      <Navbar color="light" light expand>
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
        <NavItems navList={navList} />
      </Navbar>
    );
  }
}

export default HeaderNavbar;
