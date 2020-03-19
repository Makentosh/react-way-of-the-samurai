import React from "react";
import classes from './Navbar.module.scss';
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <NavLink to={'/profile'} exact>Profile</NavLink>
        </li>
        <li>
          <NavLink to={'/dialogs'}>Message</NavLink>
        </li>
        <li>
          <NavLink to={'/news'}>News</NavLink>
        </li>
        <li>
          <NavLink to={'/music'}>Music</NavLink>
        </li>

        <li>
          <NavLink to={'/settings'}>Settings</NavLink>
        </li>
      </ul>
    </nav>
  )
};

export default Navbar;
