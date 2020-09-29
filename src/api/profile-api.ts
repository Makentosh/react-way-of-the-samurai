import {PhotosType, ProfileType} from "../types/types";
import {instance} from "./api";
import {APIResponseType} from './auth-api'

type SavePhotoResponseType = {
    photos: PhotosType
}

export const profileAPI = {
    getProfile(userId: number | null) {
        return  instance.get<ProfileType>(`profile/${userId}`)
            .then(response => response.data)
    },

    getStatus(userId: number) {
        return instance.get<string>(`profile/status/${userId}`)
            .then(response => response.data)
    },

    updateStatus(status: string) {
        return instance.put<APIResponseType>(`profile/status`, {status: status})
            .then(response => response.data)
    },

    savePhoto(photoFile: string) {
        let formData  = new FormData();
        formData.append('image', photoFile);

        return instance.put<APIResponseType<SavePhotoResponseType>>('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => response.data)
    },

    saveProfile(profile: ProfileType) {
        return instance.put<APIResponseType>('profile', profile)
            .then(response => response.data)
    }
};
