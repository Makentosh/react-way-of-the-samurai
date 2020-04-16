import React from 'react';
import {Redirect} from 'react-router';
import {connect} from 'react-redux';

let mapStatetoProps = (state) => ({
  isAuth: state.auth.isAuth
});

export const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
      render() {
        if(!this.props.isAuth) return <Redirect to={'/Login'}/>;

        return <Component {...this.props}/>
      }
    }

    let ConnectAuthRedirect = connect(mapStatetoProps)(RedirectComponent);

    return ConnectAuthRedirect
};