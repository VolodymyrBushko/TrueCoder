import React from 'react';
import {Link} from "react-router-dom";

import './navbar-panel-item.css';

const NavbarPanelItem = ({text, href, clickHandler = ()=>{}}) => {
  return (
    <li className="navbar-panel-item">
      <Link to={href} className="link" onClick={clickHandler}>{text}</Link>
    </li>
  );
}

export default NavbarPanelItem;
