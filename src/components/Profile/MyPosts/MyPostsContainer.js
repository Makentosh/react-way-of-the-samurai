import {addPostActionCreator, updatePostTextPostActionCreator} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import React from 'react';



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




const MyPostsContainer = (props) => {
  return (
      <MyPosts {...props}/>
  )

};

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
};

// let mapDispatchToProps = (dispatch) => {
//   return {
//     updateNewPostText: (postMessage) => {
//       dispatch(updatePostTextPostActionCreator(postMessage))
//     },
//     addPost: () => {
//       dispatch(addPostActionCreator())
//     }
//   }
// };



export default connect(mapStateToProps, {
  updateNewPostText: updatePostTextPostActionCreator,
  addPost: addPostActionCreator
})(MyPostsContainer);
