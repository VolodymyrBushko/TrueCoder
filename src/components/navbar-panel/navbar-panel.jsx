import React from 'react';

import NavbarPanelItem from '../navbar-panel-item';
import CookieUtil from '../../util/CookieUtil';

import './navbar-panel.css';

const NavbarPanel = () => {

  const isAdmin = CookieUtil.getCookie('is_admin');
  const token = CookieUtil.getCookie('access_token');
  let items = null;

  const signOut = () => {
    CookieUtil.eraseCookie('is_admin');
    CookieUtil.eraseCookie('access_token');
  }

  if (token) {
    items = (
      <>
        <NavbarPanelItem href="/profile" text="Profile"/>
        <NavbarPanelItem href="/sign-in" text="Sign out" clickHandler={signOut}/>
      </>
    )
  } else {
    items = (
      <>
        <NavbarPanelItem href="/sign-in" text="Sign in"/>
        <NavbarPanelItem href="/sign-up" text="Sign up"/>
      </>
    );
  }

  return (
    <ul className="navbar-panel">
      {isAdmin ? <NavbarPanelItem href="/admin" text="Admin"/> : null}
      {items}
    </ul>
  );
}

export default NavbarPanel;
