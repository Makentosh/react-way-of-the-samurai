import {profileAPI} from '../api/profile-api';
import {FormAction, stopSubmit} from 'redux-form';
import {PhotosType, PostType, ProfileType} from "../types/types";
import {BaseThunkType, InferActionsTypes} from "./reduxStore";

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




const profileReducer = (state = initialState, action: ActionsType): initialStateType => {
  switch (action.type ) {
    case 'ADD_POST': {

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

    case 'SET_USER_PROFILE': {
      return {
        ...state,
        userProfile: action.userProfile
      };
    }
    case 'SET_STATUS':
      return {
        ...state,
        status: action.status
      };

    case 'UPDATE_STATUS':
      return {
        ...state,
        status: action.newStatus
      };

    case 'DELETE_POST':
      return {
        ...state,
        posts: state.posts.filter(p => p.id !== action.postId)
      };
    case 'SAVE_PHOTO':
      return {
        ...state,
        userProfile: {...state.userProfile, photos: action.photo} as ProfileType
      };

    default:
      return state;
  }

};


export const actions = {
  addPostActionCreator: (newPostText: string ) => ({type: 'ADD_POST', newPostText} as const),
  setUserProfile: (userProfile: ProfileType) => ({type: 'SET_USER_PROFILE', userProfile} as const),
  setStatus: (status: string) => ({type: 'SET_STATUS', status} as const),
  updateStatusText: (newStatus: string) => ({type: 'UPDATE_STATUS', newStatus} as const),
  deletePost: (postId: number) => ({type: 'DELETE_POST', postId} as const),
  savePhotoSuccess: (photo: PhotosType) => ({type: 'SAVE_PHOTO', photo} as const)
};


//thunk


export const setUserProfileSuccess = (userId: number | null): ThunkType => async (dispatch) => {

 let data  = await profileAPI.getProfile(userId);
    dispatch(actions.setUserProfile(data));

};


export const setStatusSuccess = (userId: number ): ThunkType => async (dispatch) => {
  let data = await profileAPI.getStatus(userId);
      dispatch(actions.setStatus(data))
};

export const updateStatusSuccess = (newStatus: string): ThunkType => async (dispatch) => {
  let data = await profileAPI.updateStatus(newStatus);
      if (data.resultCode === 0) {
        dispatch(actions.updateStatusText(newStatus))
      }
};

export const savePhoto = (file: File): ThunkType => async (dispatch) => {
  let data = await profileAPI.savePhoto(file);
      if (data.resultCode === 0) {
        dispatch(actions.savePhotoSuccess(data.data.photos))

      }
};

export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
  let userId = getState().auth.userId;
  let data = await profileAPI.saveProfile(profile);
  if (data.resultCode === 0) {
    dispatch(setUserProfileSuccess(userId))
  } else {
    dispatch(stopSubmit('editProfile', {_error: data.messages[0]}));
    return Promise.reject(data.messages[0])
  }
};

export default profileReducer;


export type initialStateType = typeof initialState

type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>
