import React from 'react';
import {Link} from "react-router-dom";

import './navbar-panel-item.css';

const NavbarPanelItem = ({text, href}) => {
  return (
    <li className="navbar-panel-item">
      <Link to={href} className="link">{text}</Link>
    </li>
  );
}

export default NavbarPanelItem;
