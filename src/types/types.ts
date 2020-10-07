import exp from "constants";

export type PostType = {
    id: number
    message: string
    likeCount: number
}

export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type PhotosType = {
    small: string | undefined
    large: string | undefined
}

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
    aboutMe: string
}

export type usersType = {
    id: number
    name: string | null
    status: string | null
    photos: PhotosType
    followed: boolean
    location: string
}


export type PropsType = {
    onPageChanged: (pageNumber:number) => void
    pageSize:number
    currentPage: number
    totalUsersCount: number
}
