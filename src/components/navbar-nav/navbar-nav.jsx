import React from 'react';

import NavItem from '../nav-item';

import './navbar-nav.css';

const NavbarNav = () => {
  return (
    <ul className="navbar-nav mr-auto">
      <NavItem href="#" text="C++"/>
      <NavItem href="#" text="C#"/>
      <NavItem href="#" text="Java"/>
      <NavItem href="#" text="Python"/>
      <NavItem href="#" text="Ruby"/>
      <NavItem href="#" text="PHP"/>
      <NavItem href="#" text="Dart"/>
    </ul>
  );
}

export default NavbarNav;
