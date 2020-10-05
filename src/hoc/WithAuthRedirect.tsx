import React from 'react';
import {Redirect} from 'react-router';
import {connect} from 'react-redux';
import {AppStateType} from "../redux/reduxStore";

let mapStatetoProps = (state: AppStateType) => ({
  isAuth: state.auth.isAuth
});

type MapStatePropsType = {
  isAuth: boolean
}

export function withAuthRedirect<WCP>(WrappedComponent: React.ComponentType<WCP>) {

  const RedirectComponent: React.FC<WCP & MapStatePropsType> = (props) => {
    let {isAuth, ...restProps} = props;

    if (!isAuth) return <Redirect to={'/login'}/>;

    return <WrappedComponent {...restProps as WCP}/>
  }

// @ts-ignore
  return connect<MapStatePropsType, {}, WCP, AppStateType>(mapStatetoProps)(RedirectComponent)
}
