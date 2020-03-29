import React from "react";
import classes from './Header.module.scss'
import Exchange from '../Exchange';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header__logo}>
        <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt=""/>
      </div>
      <Exchange/>
    </header>
  )
};

export default Header;
