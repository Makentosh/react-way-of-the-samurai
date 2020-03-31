const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';


let initialState = {
  posts: [
    {id: 10,  message: 'post message', likeCount: 25},
    {id: 20,  message: 'post message',  likeCount: 32},
    {id: 30,  message: 'post message',  likeCount: 78},
    {id: 45,  message: 'post message',  likeCount: 15}
  ],
  newPostText: ''
};


const profileReducer = (state = initialState, action) => {
  switch (action.type ) {
    case ADD_POST:
      let post = {
        id: state.posts[state.posts.length - 1].id + 1,
        message: state.newPostText,
        likeCount: 12
      };
      state.posts.unshift(post);
      state.newPostText = '';
      return state;

    case UPDATE_POST_TEXT:
      state.newPostText = action.newText;
      return state;
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

export default profileReducer;
