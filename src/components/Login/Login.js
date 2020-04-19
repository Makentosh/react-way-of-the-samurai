import React from 'react';
import './Login.scss';
import LoginReduxForm from '../LoginForm';
import {connect} from 'react-redux';
import {setLoginUser} from '../../redux/authReducer';

const Login = (props) => {

  const onSubmit = (formData) => {
    props.setLoginUser(formData)
  };
  return (
      <div className="login-page">
        <div className="login-page__inner">
          <h1 className="login-page__title">Login</h1>
          <LoginReduxForm {...props} onSubmit={onSubmit}/>
        </div>
      </div>
  )
};


export default connect(null, {setLoginUser})(Login);
