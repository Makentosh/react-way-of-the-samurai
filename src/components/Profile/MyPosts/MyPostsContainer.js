import {actions} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import React from 'react';





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



export default connect(mapStateToProps, {addPost: actions.addPostActionCreator})(MyPostsContainer);



