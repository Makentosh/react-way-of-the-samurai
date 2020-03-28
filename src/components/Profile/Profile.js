import React from 'react';
import classes from './Profile.module.scss';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo';

const Profile = (props) => {
  return (
    <aside className={classes.main}>
      <ProfileInfo/>
      <MyPosts posts={props.posts}
               addPost={props.addPost}
               updateNewPostText={props.updateNewPostText}/>
    </aside>
  )
};

export default Profile;
