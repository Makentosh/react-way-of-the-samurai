import React from 'react';
import classes from './Profile.module.scss';
import ProfileInfo from './ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
  return (
    <aside className={classes.main}>
      <ProfileInfo/>
      <MyPostsContainer store={props.store}/>
    </aside>
  )
};

export default Profile;
