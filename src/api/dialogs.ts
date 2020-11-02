import {instance} from './api';


export const startChatFromUser = (user_id: number) => {
    return new Promise((resolve, reject) => {
        instance.put(`dialogs/${user_id}`)
            .then(response => {
                resolve(response.data)
            })
            .catch(error => {
                reject(error.data.results.error)
            })
    })
}


export const getAllDialogs = () => {
    return new Promise((resolve, reject) => {
        instance.get(`dialogs`)
            .then(response => {
                resolve(response.data)
            })
            .catch(error => {
                reject(error.data.results.error)
            })
    })
}


export const getDialogsMessages = (id: number) => {
    return new Promise((resolve, reject) => {
        instance.get(`dialogs/${id}/messages`)
            .then(response => {
                resolve(response.data)
            })
            .catch(error => {
                reject(error.data.results.error)
            })
    })
}

export const sendMessage = (id: number, data: string) => {
    return new Promise((resolve, reject) => {
        instance.post(`dialogs/${id}/messages`, data)
            .then(response => {
                resolve(response.data)
            })
            .catch(error => {
                reject(error.data.message)
            })
    })
}
