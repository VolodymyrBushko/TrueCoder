import React from 'react';

import NavItem from '../nav-item';

import './navbar-nav.css';

const NavbarNav = () => {
  return (
    <ul className="navbar-nav mr-auto">
      <NavItem href="/exercises" text="C++"/>
      <NavItem href="/exercises" text="C#"/>
      <NavItem href="/exercises" text="Java"/>
      <NavItem href="/exercises" text="Python"/>
      <NavItem href="/exercises" text="Ruby"/>
      <NavItem href="/exercises" text="PHP"/>
    </ul>
  );
}

export default NavbarNav;
