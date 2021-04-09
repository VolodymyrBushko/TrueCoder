import React from 'react';

import './nav-item.css';

const NavItem = ({text, href}) => {
  return (
    <li className="nav-item">
      <a className="nav-link" href={href}>{text}</a>
    </li>
  );
}

export default NavItem;
