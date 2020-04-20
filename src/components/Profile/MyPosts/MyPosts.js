import React from "react";
import classes from './MyPosts.module.scss';
import Post from "../Post/Post";
import PostForm from '../PostForm/PostForm';



const MyPosts = (props) => {

  let addNewPost = (value) => {
    // console.log(value.newPostMessage)
    props.addPost(value.newPostMessage);
  };


  return (
    <div className={classes.posts}>
      <h1>
        My posts
      </h1>
      <PostForm onSubmit={addNewPost}/>
      <ul className={classes.posts__list}>
        {props.posts.map(post => <Post key={post.id} {...post}/>)}
      </ul>
    </div>
  )
};

export default MyPosts;
