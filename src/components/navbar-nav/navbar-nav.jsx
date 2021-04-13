import React from 'react';

import NavItem from '../nav-item';

import './navbar-nav.css';

const NavbarNav = () => {
  return (
    <ul className="navbar-nav mr-auto">
      <NavItem href="/exercises/cpp" text="C++"/>
      <NavItem href="/exercises/csharp" text="C#"/>
      <NavItem href="/exercises/java" text="Java"/>
      <NavItem href="/exercises/python" text="Python"/>
      <NavItem href="/exercises/ruby" text="Ruby"/>
      <NavItem href="/exercises/php" text="PHP"/>
    </ul>
  );
}

export default NavbarNav;
