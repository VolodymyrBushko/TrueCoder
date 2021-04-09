import React from 'react';

import NavbarPanelItem from '../navbar-panel-item';

import './navbar-panel.css';

const NavbarPanel = () => {
  return (
    <ul className="navbar-panel">
      {/*<NavbarPanelItem href="#" text="Admin panel"/>*/}
      {/*<NavbarPanelItem href="#" text="Profile"/>*/}
      <NavbarPanelItem href="#" text="Sign in"/>
      <NavbarPanelItem href="#" text="Sign up"/>
      {/*<NavbarPanelItem href="#" text="Sign out"/>*/}
    </ul>
  );
}

export default NavbarPanel;
