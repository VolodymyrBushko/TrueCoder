import React from 'react';

import NavbarBrand from '../navbar-brand';
import NavbarToggler from '../navbar-toggler';
import NavbarCollapse from '../navbar-collapse';
import NavbarPanel from '../navbar-panel';

import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavbarBrand href="/" text="TrueCoder"/>
      <NavbarToggler/>
      <NavbarCollapse/>
      <NavbarPanel/>
    </nav>
  );
}

export default Navbar;
