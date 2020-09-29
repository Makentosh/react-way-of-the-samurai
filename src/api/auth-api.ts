import {instance} from "./api";



export type APIResponseType<D = {}, RC = ResultCode> = {
    data: D
    messages: Array<string>
    resultCode: RC
}


export enum ResultCode {
    Success = 0,
    Error = 1,
    CaptchaRequired = 10
}


type MeResponseDataType = {
    id: number
    email: string
    login: string
}

type LoginResponseType = {
    userId: number
}



export const authAPI = {
    checkAuth() {
        return instance.get<APIResponseType<MeResponseDataType>>(`auth/me`)
            .then(response => response.data)
    },

    login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return instance.post<APIResponseType<LoginResponseType>>('auth/login', {email, password, rememberMe, captcha})
            .then(response => response.data)
    },

    logout() {
        return instance.delete('/auth/login', {})
            .then(response => response.data)
    }
};


type GetCaptchaUrl = {
    url: string
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get<GetCaptchaUrl>(`security/get-captcha-url`)
            .then(response => response.data)
    },

};
