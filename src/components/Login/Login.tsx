import React from 'react';
import './Login.scss';
import LoginForm from '../LoginForm';
import {connect} from 'react-redux';
import {setLoginUser} from '../../redux/authReducer';
import {Redirect} from 'react-router';
import {AppStateType} from "../../redux/reduxStore";

type MapStateToPropsType = {
    captcha: string | null
    isAuth: boolean
}

type MapDispatchToPropsType = {
    setLoginUser: (email: string, password: string, rememberMe: boolean, captcha: string | null) => void
}

type LoginFormValueType = {
    email: string,
    password: string
    rememberMe: boolean
    captcha: string | null
}

const Login: React.FC<MapStateToPropsType & MapDispatchToPropsType> = (props) => {

  const onSubmit = (formData: LoginFormValueType) => {
    props.setLoginUser(formData.email, formData.password, formData.rememberMe, formData.captcha)
  };

  if(props.isAuth) {
     return <Redirect to={'/profile'}/>
  }




    return (
      <div className="login-page">
        <div className="login-page__inner">
          <h1 className="login-page__title">Login</h1>
            // @ts-ignore
          <LoginForm {...props}
                     onSubmit={onSubmit}/>
        </div>
      </div>
  )
};



let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  isAuth: state.auth.isAuth,
  captcha: state.auth.captcha
});




export default connect(mapStateToProps, {setLoginUser})(Login);
