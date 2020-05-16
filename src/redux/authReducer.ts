import {authAPI, securityAPI} from '../api/api';
import {stopSubmit} from 'redux-form'

const SET_USER_DATA = 'SET_USER_DATA';
const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL';


let initialState = {
  userId: null as number | null,
  email: null as  string | null,
  login: null as string | null,
  isFetching: false,
  isAuth: false,
  captcha: null as string | null
};

export type initialStateType = typeof initialState


const authReducer = (state = initialState, action: any): initialStateType => {

  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      };

    case SET_CAPTCHA_URL:
      return {
        ...state,
        captcha: action.captchaUrl
    };

    default:
      return state
  }
};

type setAuthUserDataActionTypeData = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean | null
}

type setActionUserDataType = {
    type: typeof SET_USER_DATA,
    data: setAuthUserDataActionTypeData
}


export const setUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean | null):setActionUserDataType => {
  return {
    type: SET_USER_DATA,
    data: {
      userId,
      email,
      login,
      isAuth
    }
  }
};

type captchaType = {
    type: typeof SET_CAPTCHA_URL,
    captchaUrl: string
}

export const setCaptchaUrl = (captchaUrl: string): captchaType => {
  return {
    type: SET_CAPTCHA_URL,
    captchaUrl
  }
};



export const setUserSuccess = () => async (dispatch: any) => {

  let data = await authAPI.checkAuth();

      if (data.resultCode === 0) {
        let {id, login, email} = data.data;
        dispatch(setUserData(id, email, login, true))
      }

};

export const setLoginUser = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
  let data = await authAPI.login(email, password, rememberMe, captcha);
        if(data.resultCode === 0) {
          dispatch(setUserSuccess())
        }  else {

           if(data.resultCode === 10) {
              dispatch(getCaptchaUrl())
            }
          let message = data.messages.length > 0 ? data.messages[0] : 'Incorrect login or password';
          dispatch(stopSubmit('login', {_error: message}));
        }

};


export const setLogout = () => async (dispatch: any) => {
 let data = await authAPI.logout();
      if(data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false))
      }

};

export const getCaptchaUrl = () => async (dispatch: any) => {
 let data = await securityAPI.getCaptchaUrl();
 let captchaUrl = data.url;

  dispatch(setCaptchaUrl(captchaUrl))
};

export default authReducer;