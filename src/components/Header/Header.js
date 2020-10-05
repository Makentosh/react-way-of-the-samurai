import React from "react";
import classes from './Header.module.scss'
import {Button} from 'antd'
import Exchange from '../Exchange';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {setLogout} from '../../redux/authReducer';

const Header = (props) => {

  return (
      <header className={classes.header}>
        <div className={classes.header__auth}>
          {props.isAuth
              ?
                <div className={classes.header__login}>
                  <div className={classes.header__loginNname}>
                    {props.login}
                  </div>
                  <div className={classes.header__logout}>
                    <Button type="primary" className={classes.logoutBtn}
                            onClick={props.setLogout}>
                      Logout
                    </Button>
                  </div>
                </div>
              : <div className={classes.header__login}>
                  <NavLink to={'/login'}>Login</NavLink>
                </div>
          }
        </div>

        <div className={classes.header__inner}>
          <div className={classes.header__logo}>
            <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt=""/>
          </div>
          <Exchange/>
        </div>
      </header>
  )

};

let mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    isAuth: state.auth.isAuth
  }
};


export default connect(mapStateToProps, {setLogout})(Header);
