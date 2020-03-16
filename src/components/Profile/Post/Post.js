import React from "react";
import classes from './Post.module.scss';

const Post = props => {
  return (
    <li className={classes.post}>
      <div className={classes.post__inner}>
        <div className={classes.post__avatar}>
          <img src="https://pbs.twimg.com/profile_images/943470466077003777/zxoWoZ-c_400x400.jpg" alt=""/>
        </div>
        <div className={classes.post__info}>
          <div className={classes.post__title}>{props.title}</div>
          <div className={classes.post__message}>{props.message}</div>
          <div className={classes.post__like}>
            <button className={classes.post__btn}>Like</button>
          </div>
        </div>
      </div>
    </li>
  )
};

export default Post;
