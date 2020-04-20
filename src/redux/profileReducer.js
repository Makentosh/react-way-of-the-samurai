import {profileAPI} from '../api/api';

const ADD_POST = 'ADD-POST';
// const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const UPDATE_STATUS = 'UPDATE_STATUS';


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

    // case UPDATE_POST_TEXT: {
    //   return {
    //     ...state,
    //     newPostText: action.newText
    //   };
    // }

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

// export const updatePostTextPostActionCreator = (newText) => {
//   return {
//     type:  UPDATE_POST_TEXT,
//     newText: newText
//   }
// };

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


//thunk

export const setUserProfileSuccess = (userId) => (dispatch) => {

  profileAPI.getProfile(userId)
      .then(data => {
        dispatch(setUserProfile(data));
      })
};


export const setStatusSuccess = (userId) => (dispatch) => {
  profileAPI.getStatus(userId)
      .then(data => {
        dispatch(setStatus(data))
      })
};

export const updateStatusSuccess = (newStatus) => (dispatch) => {
  profileAPI.updateStatus(newStatus)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(updateStatusText(newStatus))
        }
      })
}

export default profileReducer;
