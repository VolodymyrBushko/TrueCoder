import React from 'react';

import NavItem from '../nav-item';

import './navbar-nav.css';

const NavbarNav = () => {
  return (
    <ul className="navbar-nav mr-auto">
      <NavItem/>
      <NavItem/>
      <NavItem/>
    </ul>
  );
}

export default NavbarNav;
