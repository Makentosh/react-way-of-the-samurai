import {authAPI, ResultCode, securityAPI} from '../api/auth-api';
import {FormAction, stopSubmit} from 'redux-form'
import {BaseThunkType, InferActionsTypes} from "./reduxStore";



let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isFetching: false,
    isAuth: null as boolean | null,
    captcha: null as string | null
};


const authReducer = (state = initialState, action: ActionTypes): initialStateType => {

    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.data
            };

        case 'SET_CAPTCHA_URL':
            return {
                ...state,
                captcha: action.captchaUrl
            };

        default:
            return state
    }
};


export const actions = {
    setUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean | null) => ({
        type: 'SET_USER_DATA',
        data: {userId, email, login, isAuth}
    } as const),
    setCaptchaUrl: (captchaUrl: string) => ({
        type: 'SET_CAPTCHA_URL',
        captchaUrl
    } as const),

};


export const setUserSuccess = (): ThunkType => async (dispatch) => {

    let data = await authAPI.checkAuth();

    if (data.resultCode === ResultCode.Success) {
        let {id, login, email} = data.data;
        dispatch(actions.setUserData(id, email, login, true))
    }

};

export const setLoginUser = (email: string, password: string, rememberMe: boolean, captcha: string | null): ThunkType => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe, captcha);
    if (data.resultCode === ResultCode.Success) {
        dispatch(setUserSuccess())
    } else {

        if (data.resultCode === ResultCode.CaptchaRequired) {
            dispatch(getCaptchaUrl())
        }
        let message = data.messages.length > 0 ? data.messages[0] : 'Incorrect login or password';

        // @ts-ignore
        dispatch(stopSubmit('login', {_error: message}));
    }

};


export const setLogout = (): ThunkType => async (dispatch) => {
    let data = await authAPI.logout();
    if (data.resultCode === ResultCode.Success) {
        dispatch(actions.setUserData(null, null, null, false))
    }

};

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    let data = await securityAPI.getCaptchaUrl();
    let captchaUrl = data.url;

    dispatch(actions.setCaptchaUrl(captchaUrl))
};

export default authReducer;


export type initialStateType = typeof initialState
type ActionTypes = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionTypes | FormAction>
