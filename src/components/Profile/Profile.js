import React from 'react';
import classes from './Profile.module.scss';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo';

const Profile = () => {
  return (
    <aside className={classes.main}>
      <ProfileInfo/>
      <MyPosts/>
    </aside>
  )
};

export default Profile;
