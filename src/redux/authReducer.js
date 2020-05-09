import {authAPI, securityAPI} from '../api/api';
import {stopSubmit} from 'redux-form'

const SET_USER_DATA = 'SET_USER_DATA';
// const LOGIN_USER = 'LOGIN_USER';
// const LOGOUT_USER = 'LOGOUT_USER';
const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL';


let initialState = {
  userId: '',
  email: '',
  login: '',
  isFetching: false,
  isAuth: false,
  captcha: null
};

const authReducer = (state = initialState, action) => {

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
    //
    // case LOGOUT_USER:
    //   return {
    //     ...state,
    //     isAuth: false,
    //     userId: null
    //   };

    default:
      return state
  }
};

export const setUserData = (userId, email, login, isAuth) => {
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

export const setCaptchaUrl = (captchaUrl) => {
  return {
    type: SET_CAPTCHA_URL,
    captchaUrl
  }
};

// export const loginUser = (userId) => {
//   return {
//     type: LOGIN_USER,
//     userId
//   }
// };
//
// export const logout = () => {
//   return {
//     type: LOGOUT_USER
//   }
// };



export const setUserSuccess = () => async (dispatch) => {

  let data = await authAPI.checkAuth();

      if (data.resultCode === 0) {
        let {id, login, email} = data.data;
        dispatch(setUserData(id, email, login, true))
      }

};

export const setLoginUser = (email, password, rememberMe, captcha) => async (dispatch) => {
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


export const setLogout = () => async (dispatch) => {
 let data = await authAPI.logout();
      if(data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false))
      }

};

export const getCaptchaUrl = () => async (dispatch) => {
 let data = await securityAPI.getCaptchaUrl();
 let captchaUrl = data.url;

  dispatch(setCaptchaUrl(captchaUrl))
};

export default authReducer;
