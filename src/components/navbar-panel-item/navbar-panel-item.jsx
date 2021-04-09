import React from 'react';

import './navbar-panel-item.css';

const NavbarPanelItem = ({text, href}) => {
  return (
    <li className="navbar-panel-item">
      <a href={href} className="link">{text}</a>
    </li>
  );
}

export default NavbarPanelItem;
