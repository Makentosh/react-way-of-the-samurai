import React from 'react';
import './Login.scss';
import LoginReduxForm from '../LoginForm';

const Login = (props) => {

  const onSubmit = (formdata) => {
    console.log(formdata, 'submit')
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


export default Login;
