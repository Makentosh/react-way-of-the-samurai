import {profileAPI} from '../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';


let initialState = {
  posts: [
    {id: 10,  message: 'post message', likeCount: 25},
    {id: 20,  message: 'post message',  likeCount: 32},
    {id: 30,  message: 'post message',  likeCount: 78},
    {id: 45,  message: 'post message',  likeCount: 15}
  ],
  newPostText: '',
  userProfile: []
};


const profileReducer = (state = initialState, action) => {
  switch (action.type ) {
    case ADD_POST: {

      let post = {
        id: state.posts[state.posts.length - 1].id + 1,
        message: state.newPostText,
        likeCount: 12
      };


      return {
        ...state,
        posts: [post, ...state.posts],
        newPostText: ''
      };

    }

    case UPDATE_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText
      };
    }

    case SET_USER_PROFILE: {
      return {
        ...state,
        userProfile:  action.userProfile
      };
    }

    default:
      return state;
  }

};

export const addPostActionCreator = () => {
  return {
    type:  ADD_POST
  }
};

export const updatePostTextPostActionCreator = (newText) => {
  return {
    type:  UPDATE_POST_TEXT,
    newText: newText
  }
};

export const setUserProfile = (userProfile) => {
  return {
    type: SET_USER_PROFILE,
    userProfile
  }
};


//thunk

export const setUserProfileSuccess = (userId) => (dispatch) => {

  profileAPI.getProfile(userId)
      .then(data => {
        dispatch(setUserProfile(data));
      })
};

export default profileReducer;
