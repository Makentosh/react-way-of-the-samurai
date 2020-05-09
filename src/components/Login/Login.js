import React from 'react';
import './Login.scss';
import LoginReduxForm from '../LoginForm';
import {connect} from 'react-redux';
import {setLoginUser} from '../../redux/authReducer';
import {Redirect} from 'react-router';

const Login = (props) => {

  const onSubmit = (formData) => {
    props.setLoginUser(formData.email, formData.password, formData.rememberMe, formData.captcha)
  };

  if(props.isAuth) {
     return <Redirect to={'/profile'}/>
  }



  return (
      <div className="login-page">
        <div className="login-page__inner">
          <h1 className="login-page__title">Login</h1>
          <LoginReduxForm {...props}
                          onSubmit={onSubmit}/>
        </div>
      </div>
  )
};

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captcha: state.auth.captcha
});


export default connect(mapStateToProps, {setLoginUser})(Login);
