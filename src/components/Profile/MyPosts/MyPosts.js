import React from "react";
import classes from './MyPosts.module.scss';
import Post from "../Post/Post";


const posts = [
  {title: 'post name', message: 'post message'},
  {title: 'post name', message: 'post message'},
  {title: 'post name', message: 'post message'},
  {title: 'post name', message: 'post message'}
];

const MyPosts = () => {
  return (
    <div className={classes.posts}>
      <h1>
        My posts
      </h1>
      <div className={classes.posts__form}>
        <textarea className={classes.posts__field} name="" id="" cols="30" rows="10" placeholder="Your news..."/>
        <button type="button" className={classes.posts__btn}>
          <div>
            Send
          </div>
        </button>
      </div>
      <ul className={classes.posts__list}>
        {posts.map((post, index) => <Post key={index} {...post}/>)}
      </ul>
    </div>
  )
};

export default MyPosts;
