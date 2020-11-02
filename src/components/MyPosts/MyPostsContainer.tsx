import {actions} from '../../redux/profileReducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import React, {FC} from 'react';
import {PostType} from "../../types/types";
import {AppStateType} from "../../redux/reduxStore";

type PropsType = {
  posts: Array<PostType>
  addPost: (newPostText: string) => void
}

const MyPostsContainer: FC<PropsType> = (props) => {
  return (
      <MyPosts {...props}/>
  )

};

let mapStateToProps = (state: AppStateType) => {
  return {
    posts: state.profilePage.posts,
  }
};



export default connect(mapStateToProps, {addPost: actions.addPostActionCreator})(MyPostsContainer);



