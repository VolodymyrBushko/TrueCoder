import React from 'react';

import NavbarBrand from '../navbar-brand';
import NavbarToggler from '../navbar-toggler';
import NavbarCollapse from '../navbar-collapse';

import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavbarBrand/>
      <NavbarToggler/>
      <NavbarCollapse/>
    </nav>
  );
}

export default Navbar;
