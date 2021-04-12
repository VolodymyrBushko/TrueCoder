import React from 'react';

import NavbarPanelItem from '../navbar-panel-item';

import './navbar-panel.css';

const NavbarPanel = () => {
  return (
    <ul className="navbar-panel">
      <NavbarPanelItem href="/admin" text="Admin"/>
      <NavbarPanelItem href="/profile" text="Profile"/>
      <NavbarPanelItem href="/sign-in" text="Sign in"/>
      <NavbarPanelItem href="/sign-up" text="Sign up"/>
      {/*<NavbarPanelItem href="#" text="Sign out"/>*/}
    </ul>
  );
}

export default NavbarPanel;
