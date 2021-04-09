import React from 'react';

import NavbarNav from '../navbar-nav';

import './navbar-collapse.css';

const NavbarCollapse = () => {
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <NavbarNav/>
    </div>
  );
}

export default NavbarCollapse;
