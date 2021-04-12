import React from 'react';
import {Link} from "react-router-dom";

import './nav-item.css';

const NavItem = ({text, href}) => {
  return (
    <li className="nav-item">
      <Link to={href} className="nav-link">{text}</Link>
    </li>
  );
}

export default NavItem;
