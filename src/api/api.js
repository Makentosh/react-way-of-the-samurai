import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'dca52114-ffc8-4838-9ffd-89d582a5b484'
  }
});



export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
  },
  getFollow(id) {
    return instance.post(`follow/${id}`)
        .then(response => response.data)

  },
  getUnfollow(id) {
    return instance.delete(`follow/${id}`)
        .then(response => response.data)
  }
};

export const profileAPI = {
  getProfile(userId) {
    return  instance.get(`profile/${userId}`)
                      .then(response => response.data)
  },

  getStatus(userId) {
    return instance.get(`profile/status/${userId}`)
        .then(response => response.data)
  },

  updateStatus(status) {
    return instance.put(`profile/status`, {status: status})
  },

  savePhoto(photoFile) {
    let formData  = new FormData();
    formData.append('image', photoFile);

    return instance.put('profile/photo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }
};

export const authAPI = {
  checkAuth() {
    return instance.get(`auth/me`)
                  .then(response => response.data)
  },

  login(email, password, rememberMe) {
    return instance.post('auth/login', {email, password, rememberMe})
        .then(response => response.data)
  },

  logout() {
    return instance.delete('/auth/login', {})
        .then(response => response.data)
  }
};


