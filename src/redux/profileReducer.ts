import {profileAPI} from '../api/api';
import {stopSubmit} from 'redux-form';
import {PhotosType, PostType, ProfileType} from "../types/types";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./reduxStore";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const UPDATE_STATUS = 'UPDATE_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO = 'SAVE_PHOTO';


let initialState = {
  posts: [
    {id: 10,  message: 'post message', likeCount: 25},
    {id: 20,  message: 'post message',  likeCount: 32},
    {id: 30,  message: 'post message',  likeCount: 78},
    {id: 45,  message: 'post message',  likeCount: 15}
  ] as Array<PostType>,
  userProfile: null as ProfileType | null,
  status: null as string | null
};

export type initialStateType = typeof initialState

const profileReducer = (state = initialState, action: any): initialStateType => {
  switch (action.type ) {
    case ADD_POST: {

      let post = {
        id: state.posts[state.posts.length - 1].id + 1,
        message: action.newPostText,
        likeCount: 12
      };


      return {
        ...state,
        posts: [post, ...state.posts],
      };

    }

    case SET_USER_PROFILE: {
      return {
        ...state,
        userProfile: action.userProfile
      };
    }
    case SET_STATUS:
      return {
        ...state,
        status: action.status
      };

    case UPDATE_STATUS:
      return {
        ...state,
        status: action.newStatus
      };

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(p => p.id !== action.postId)
      };
    case SAVE_PHOTO:
      return {
        ...state,
        userProfile: {...state.userProfile, photos: action.photo} as ProfileType
      };

    default:
      return state;
  }

};


type addPostType = {
  type:  typeof ADD_POST,
  newPostText: string
}

export const addPostActionCreator = (newPostText: string ): addPostType => {
  return {
    type:  ADD_POST,
    newPostText
  }
};

type setUserType = {
  type: typeof SET_USER_PROFILE
  userProfile: ProfileType
}

export const setUserProfile = (userProfile: ProfileType): setUserType => {
  return {
    type: SET_USER_PROFILE,
    userProfile
  }
};

type setStatusType = {
  type: typeof SET_STATUS
  status: string
}


export const setStatus = (status: string): setStatusType => ({
  type: SET_STATUS,
  status
});

type updateStatusTestType = {
  type: typeof UPDATE_STATUS
  newStatus: string
}

export const updateStatusText = (newStatus: string): updateStatusTestType => ({
  type: UPDATE_STATUS,
  newStatus
});


type deletePostType = {
  type: typeof DELETE_POST
  postId: number
}

export const deletePost = (postId: number): deletePostType => ({
  type: DELETE_POST,
  postId
});

type savePhotoType = {
  type: typeof SAVE_PHOTO
  photo: PhotosType
}

export const savePhotoSuccess = (photo: PhotosType): savePhotoType => ({
  type: SAVE_PHOTO,
  photo
});



//thunk

type ActionsTypes = savePhotoType | deletePostType | updateStatusTestType | setStatusType | setUserType | addPostType;

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;

export const setUserProfileSuccess = (userId: number | null): ThunkType => async (dispatch) => {

 let data  = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(data));

};


export const setStatusSuccess = (userId: number ): ThunkType => async (dispatch) => {
  let data = await profileAPI.getStatus(userId);
      dispatch(setStatus(data))
};

export const updateStatusSuccess = (newStatus: string): ThunkType => async (dispatch) => {
  let response = await profileAPI.updateStatus(newStatus);
      if (response.data.resultCode === 0) {
        dispatch(updateStatusText(newStatus))
      }
};

export const savePhoto = (file: any): ThunkType => async (dispatch) => {
  let response = await profileAPI.savePhoto(file);
      if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))

      }
};

export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
  let userId = getState().auth.userId;
  let response = await profileAPI.saveProfile(profile);
  if (response.data.resultCode === 0) {
    dispatch(setUserProfileSuccess(userId))
  } else {

    // @ts-ignore
    dispatch(stopSubmit('editProfile', {_error: response.data.messages[0]}));
    return Promise.reject()
  }
};

export default profileReducer;
