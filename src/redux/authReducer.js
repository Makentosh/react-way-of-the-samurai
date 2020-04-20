import {authAPI} from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA';
// const LOGIN_USER = 'LOGIN_USER';
// const LOGOUT_USER = 'LOGOUT_USER';


let initialState = {
  userId: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,

};

const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      };

    // case LOGIN_USER:
    //   return {
    //     ...state,
    //     userId: action.userId,
    //     isAuth: true
    // };
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



export const setUserSuccess = () => (dispatch) => {

  authAPI.checkAuth()
      .then(data => {
        if (data.resultCode === 0) {
          let {id, login, email} = data.data;
          dispatch(setUserData(id, email, login, true))
        }
      })
};

export const setLoginUser = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe)
      .then(data => {
        if(data.resultCode === 0) {
          dispatch(setUserSuccess())
        }

      })
};


export const setLogout = () => (dispatch) => {
  authAPI.logout()
      .then(data => {
        if(data.resultCode === 0) {
          dispatch(setUserData(null, null, null, false))
        }

      })
};

export default authReducer;
