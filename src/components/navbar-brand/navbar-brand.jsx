import React from 'react';
import {Link} from "react-router-dom";

import './navbar-brand.css';

const NavbarBrand = ({text, href}) => {
  return (
    <span className="navbar-brand">
      <Link to={href} className="link">
         {text}
        <span className="lower-slash">_</span>
      </Link>
    </span>
  );
}

export default NavbarBrand;
