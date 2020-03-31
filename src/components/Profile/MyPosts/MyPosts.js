import React from "react";
import classes from './MyPosts.module.scss';
import Post from "../Post/Post";



const MyPosts = (props) => {
  let newPost = React.createRef();

  let addNewPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let postMessage = newPost.current.value;
    props.updateNewPostText(postMessage)
  };

  return (
    <div className={classes.posts}>
      <h1>
        My posts
      </h1>
      <div className={classes.posts__form}>
        <textarea className={classes.posts__field}
                  onChange={onPostChange}
                  ref={newPost}
                  value={props.newPostText}
                  cols="10" rows="5"
                  placeholder="Your news..."/>
        <button type="button"
                className={classes.posts__btn}
                onClick={addNewPost}>
            Send
        </button>
      </div>
      <ul className={classes.posts__list}>
        {props.posts.map(post => <Post key={post.id} {...post}/>)}
      </ul>
    </div>
  )
};

export default MyPosts;
