import React from "react";
import {addPostActionCreator, updatePostTextPostActionCreator} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';



// const MyPostsContainer = (props) => {
//   // let state = props.store.getState();
//
//   // let addNewPost = () => {
//   //   props.store.dispatch(addPostActionCreator());
//   // };
//   //
//   // let onPostChange = (postMessage) => {
//   //   props.store.dispatch(updatePostTextPostActionCreator(postMessage))
//   // };
//
//   return (
//       <StoreContext.Consumer>
//         { (store) => {
//
//           let state = store.getState();
//
//           let addNewPost = () => {
//             store.dispatch(addPostActionCreator());
//           };
//
//           let onPostChange = (postMessage) => {
//             store.dispatch(updatePostTextPostActionCreator(postMessage))
//           };
//
//           return <MyPosts updateNewPostText={onPostChange}
//                    addPost={addNewPost}
//                    posts={state.profilePage.posts}
//                    newPostText={state.profilePage.newPostText} />
//         }}
//       </StoreContext.Consumer>
//   )
// };

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (postMessage) => {
      dispatch(updatePostTextPostActionCreator(postMessage))
    },
    addPost: () => {
      dispatch(addPostActionCreator())
    }
  }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
