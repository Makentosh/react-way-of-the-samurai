import React from 'react';
import './LoginForm.scss';
import {InjectedFormProps, reduxForm} from 'redux-form'
import {createField, Input} from '../common/FormsControls/FormsControls';
import {requiredField} from '../../utils/validators/validators';

type LoginFormValueType = {
  email: string
  captcha: string | null
  password: string
  rememberMe: boolean
  handleSubmit: any
}

type LoginFormOwnProps = {
  captcha: string | null
  handleSubmit: any
}

type LoginFormValuesTypesKeys = keyof LoginFormValueType


const LoginForm: React.FC<InjectedFormProps<LoginFormValueType, LoginFormOwnProps> & LoginFormOwnProps> = ({captcha, handleSubmit, error, ...props}) => {
  return (
      <div className="login-form">
        <form className="login-form__wrap" onSubmit={handleSubmit}>

          {createField<LoginFormValuesTypesKeys>('Email', 'email', [requiredField], Input, {type: 'email'}) }

          {createField<LoginFormValuesTypesKeys>('Password', 'password', [requiredField], Input, {type: 'password'}) }

          {error &&

            <div className={"form-summary-error"}>
              {error}
            </div>
          }


          {createField<LoginFormValuesTypesKeys>(undefined, 'rememberMe', [], Input, {type: 'checkbox'}) }

          {captcha &&

          <div className="captcha">
            <img src={captcha} alt=""/>
          </div>
          }

          {captcha &&

           createField<LoginFormValuesTypesKeys>('Symbols for image', 'captcha', [requiredField], Input, {})
          }


          <div className="login-form__control">
            <button className="login-form__btn btn-submit">
              Login
            </button>
          </div>
        </form>
      </div>
  )
};


export default reduxForm<LoginFormValueType, LoginFormOwnProps>({form: 'login'})(LoginForm);
