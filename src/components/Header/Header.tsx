import React, {FC} from "react";
import classes from './Header.module.scss'
import {Button} from 'antd'
import Exchange from '../Exchange';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {setLogout} from '../../redux/authReducer';
import {AppStateType} from "../../redux/reduxStore";

type MapPropsType = {
    isAuth: boolean
    login: string | null
}

type DispatchPropsType = {
    setLogout: () => void
}

const Header: FC<DispatchPropsType & MapPropsType> = ({...props}) => {

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

let mapStateToProps = (state: AppStateType) => {
  return {
    login: state.auth.login,
    isAuth: state.auth.isAuth
  } as MapPropsType
};


export default connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, {setLogout})(Header);
