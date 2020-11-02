import React from "react";
import classes from './MyPosts.module.scss';
import Post from "../Post/Post";
import PostForm, {AddPostFormType} from '../PostForm/PostForm';
import {PostType} from "../../types/types";

type PropsType = {
    posts: Array<PostType>
    addPost: (newPostMessage: string) => void
}

const MyPosts: React.FC<PropsType> = (props) => {

  let addNewPost = (value: AddPostFormType) => {
    props.addPost(value.newPostMessage);
  };


  return (
    <div className={classes.posts}>
      <h1>
        My posts
      </h1>
        // @ts-ignore
      <PostForm onSubmit={addNewPost}/>
      <ul className={classes.posts__list}>
        {props.posts.map(post => <Post key={post.id} {...post}/>)}
      </ul>
    </div>
  )
};

export default MyPosts;
