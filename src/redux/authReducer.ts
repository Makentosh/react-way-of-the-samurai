import {authAPI, ResultCode, securityAPI} from '../api/auth-api';
import {stopSubmit} from 'redux-form'
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./reduxStore";

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



type ActionTypes = setActionUserDataType| captchaType;
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>

export const setUserSuccess = (): ThunkType => async (dispatch) => {

  let data = await authAPI.checkAuth();

      if (data.resultCode ===  ResultCode.Success) {
        let {id, login, email} = data.data;
        dispatch(setUserData(id, email, login, true))
      }

};

export const setLoginUser = (email: string, password: string, rememberMe: boolean, captcha: string | null): ThunkType => async (dispatch) => {
  let data = await authAPI.login(email, password, rememberMe, captcha);
        if(data.resultCode === ResultCode.Success) {
          dispatch(setUserSuccess())
        }  else {

           if(data.resultCode === ResultCode.CaptchaRequired) {
              dispatch(getCaptchaUrl())
            }
          let message = data.messages.length > 0 ? data.messages[0] : 'Incorrect login or password';

          // @ts-ignore
            dispatch(stopSubmit('login', {_error: message}));
        }

};


export const setLogout = (): ThunkType => async (dispatch) => {
 let data = await authAPI.logout();
      if(data.resultCode === ResultCode.Success) {
        dispatch(setUserData(null, null, null, false))
      }

};

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
 let data = await securityAPI.getCaptchaUrl();
 let captchaUrl = data.url;

  dispatch(setCaptchaUrl(captchaUrl))
};

export default authReducer;
