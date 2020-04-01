import React from "react";
import {addPostActionCreator, updatePostTextPostActionCreator} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';



const MyPostsContainer = (props) => {
  // let state = props.store.getState();

  // let addNewPost = () => {
  //   props.store.dispatch(addPostActionCreator());
  // };
  //
  // let onPostChange = (postMessage) => {
  //   props.store.dispatch(updatePostTextPostActionCreator(postMessage))
  // };

  return (
      <StoreContext.Consumer>
        { (store) => {

          let state = store.getState();

          let addNewPost = () => {
            store.dispatch(addPostActionCreator());
          };

          let onPostChange = (postMessage) => {
            store.dispatch(updatePostTextPostActionCreator(postMessage))
          };

          return <MyPosts updateNewPostText={onPostChange}
                   addPost={addNewPost}
                   posts={state.profilePage.posts}
                   newPostText={state.profilePage.newPostText} />
        }}
      </StoreContext.Consumer>
  )
};

export default MyPostsContainer;
