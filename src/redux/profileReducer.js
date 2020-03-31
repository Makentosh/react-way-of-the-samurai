const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';



const profileReducer = (state, action) => {
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
