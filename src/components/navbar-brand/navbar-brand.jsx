import React from 'react';

import './navbar-brand.css';

const NavbarBrand = ({text, href}) => {
  return (
    <span className="navbar-brand">
      <a className="link" href={href}>
        {text}
        <span className="lower-slash">_</span>
      </a>
    </span>
  );
}

export default NavbarBrand;
