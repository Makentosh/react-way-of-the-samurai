import {GetItemsType, instance} from "./api";
import {APIResponseType} from './auth-api'



export const usersAPI = {
    getUsers(currentPage: number, pageSize: number, term: string = '', friend: null | boolean = null ) {
        return instance.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}&term=${term}` + (friend == null ? '' :  `&friend=${friend}`))
            .then(response => response.data)
    },
    getFollow(id: number) {
        return instance.post<APIResponseType>(`follow/${id}`)
            .then(response => response.data)

    },
    getUnfollow(id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data) as Promise<APIResponseType>
    }
};
