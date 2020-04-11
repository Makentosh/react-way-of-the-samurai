import React from "react";
import classes from './Header.module.scss'
import Exchange from '../Exchange';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
  console.log(props)

  return (
      <header className={classes.header}>
        <div className={classes.header__logo}>
          <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt=""/>
        </div>
        <Exchange/>

        {props.isAuth ? props.login
            :
            <div className={classes.header__login}>
              <NavLink to={'/login'}>Login</NavLink>
            </div>}

      </header>
  )

};


export default Header;
