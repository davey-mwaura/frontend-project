import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './LOGO 1.png';

const Logo = () => {
  return (
    <NavLink to="/"  activeClassName="logo">
      <img src={logo} className="logo" alt="logo" />
    </NavLink>
  );
}

export default Logo;