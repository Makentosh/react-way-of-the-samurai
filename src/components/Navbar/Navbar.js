import React from "react";
import classes from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href="/">Profile</a>
        </li>
        <li>
          <a href="/">News</a>
        </li>
        <li>
          <a href="/">Music</a>
        </li>
        <li>
          <a href="/">Message</a>
        </li>
        <li>
          <a href="/">Settings</a>
        </li>
      </ul>
    </nav>
  )
};

export default Navbar;
