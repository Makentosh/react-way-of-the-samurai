import {profileAPI} from '../api/api';
import {stopSubmit} from 'redux-form';

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
  ],
  userProfile: [],
  status: ''
};


const profileReducer = (state = initialState, action) => {
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
        userProfile:  action.userProfile
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
        profile: {...state.profile, photos: action.photo}
      };

    default:
      return state;
  }

};

export const addPostActionCreator = (newPostText) => {
  return {
    type:  ADD_POST,
    newPostText
  }
};

export const setUserProfile = (userProfile) => {
  return {
    type: SET_USER_PROFILE,
    userProfile
  }
};


export const setStatus = (status) => ({
  type: SET_STATUS,
  status
});

export const updateStatusText = (newStatus) => ({
  type: UPDATE_STATUS,
  newStatus
});

export const deletePost = (postId) => ({
  type: DELETE_POST,
  postId
});

export const savePhotoSuccess = (photo) => ({
  type: SAVE_PHOTO,
  photo
});



//thunk

export const setUserProfileSuccess = (userId) => async (dispatch) => {

 let data  = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(data));

};


export const setStatusSuccess = (userId) => async (dispatch) => {
  let data = await profileAPI.getStatus(userId);
      dispatch(setStatus(data))
};

export const updateStatusSuccess = (newStatus) => async (dispatch) => {
  let response = await profileAPI.updateStatus(newStatus);
      if (response.data.resultCode === 0) {
        dispatch(updateStatusText(newStatus))
      }
};

export const savePhoto = (file) => async (dispatch) => {
  let response = await profileAPI.savePhoto(file);
      if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))

      }
};

export const saveProfile = (profile) => async (dispatch, getState) => {
  let userId = getState().auth.userId;
  let response = await profileAPI.saveProfile(profile);
  if (response.data.resultCode === 0) {
    dispatch(setUserProfileSuccess(userId))
  } else {
    dispatch(stopSubmit('editProfile', {_error: response.data.messages[0]}));
    return Promise.reject()
  }
};

export default profileReducer;
