import React from 'react';
import './LoginForm.scss';
import { Field, reduxForm } from 'redux-form'

const LoginForm = props => {
  console.log(props)
  return (
      <div className="login-form">
        <form className="login-form__wrap" onSubmit={props.handleSubmit}>
          <div className="login-form__control">
            <Field className="login-form__field" placeholder={'Login'} component={'input'} name={'login'} type={'text'}/>
          </div>
          <div className="login-form__control">
            <Field className="login-form__field" placeholder={'Password'} component={'input'} name={'password'} type={'password'}/>
          </div>
          <div className="login-form__control">
            <label className="login-form__label">
              <Field className="login-form__checkbox" component={'input'} name={'rememberMe'} type={'checkbox'}/>
              <div className="login-form__label-text">
                Remember Me
              </div>
            </label>
          </div>
          <div className="login-form__control">
            <button type={'submit'} className="login-form__btn btn-submit">
              Login
            </button>
          </div>
        </form>
      </div>
  )
};


export default reduxForm({form: 'login'})(LoginForm);
