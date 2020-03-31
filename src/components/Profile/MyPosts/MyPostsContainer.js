import React from "react";
import {addPostActionCreator, updatePostTextPostActionCreator} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';



const MyPostsContainer = (props) => {
  let state = props.store.getState();

  let addNewPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let onPostChange = (postMessage) => {
    props.store.dispatch(updatePostTextPostActionCreator(postMessage))
  };

  return (
    <MyPosts updateNewPostText={onPostChange}
             addPost={addNewPost}
             posts={state.profilePage.posts}
             newPostText={state.profilePage.newPostText}
    />
  )
};

export default MyPostsContainer;
