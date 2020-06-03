import axios from 'axios';
import {ProfileType} from "../types/types";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '822b1fda-a66f-4307-a05f-ffa17e2c3670'
  }
});



export const usersAPI = {
  getUsers(currentPage: number, pageSize: number) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
  },
  getFollow(id: number) {
    return instance.post(`follow/${id}`)
        .then(response => response.data)

  },
  getUnfollow(id: number) {
    return instance.delete(`follow/${id}`)
        .then(response => response.data)
  }
};

export const profileAPI = {
  getProfile(userId: number | null) {
    return  instance.get(`profile/${userId}`)
                      .then(response => response.data)
  },

  getStatus(userId: number) {
    return instance.get(`profile/status/${userId}`)
        .then(response => response.data)
  },

  updateStatus(status: string) {
    return instance.put(`profile/status`, {status: status})
  },

  savePhoto(photoFile: string) {
    let formData  = new FormData();
    formData.append('image', photoFile);

    return instance.put('profile/photo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },

  saveProfile(profile: ProfileType) {
    return instance.put('profile', profile)
  }
};


export enum ResultCode {
  Success = 0,
  Error = 1,
  CaptchaRequired = 10
}

type MeResponseType = {
  data: {id: number, email: string, login: string}
  resultCode: ResultCode
  messages: Array<string>
}

type LoginResponseType = {
  data: {userId: number}
  resultCode: ResultCode
  messages: Array<string>
}

export const authAPI = {
  checkAuth() {
    return instance.get<MeResponseType>(`auth/me`)
                  .then(response => response.data)
  },

  login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
    return instance.post<LoginResponseType>('auth/login', {email, password, rememberMe, captcha})
        .then(response => response.data)
  },

  logout() {
    return instance.delete('/auth/login', {})
        .then(response => response.data)
  }
};


export const securityAPI = {
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`)
        .then(response => response.data)
  },

};


