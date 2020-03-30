import React from 'react';
import classes from './Profile.module.scss';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo';

const Profile = (props) => {
  return (
    <aside className={classes.main}>
      <ProfileInfo/>
      <MyPosts posts={props.posts}
               dispatch={props.dispatch}
               newPostText={props.newPostText}
              />
    </aside>
  )
};

export default Profile;
