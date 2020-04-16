import React from 'react';
import classes from './ProfileInfo.module.scss';
import Loader from '../../Loader';
import MyPostsContainer from '../MyPosts/MyPostsContainer';


const ProfileInfo = (props) => {

  if(!props.profile.photos) {
    return <Loader/>
  }

  return (

    <React.Fragment>
      <div className={classes.profile__image}>
        <img src={props.profile.photos.large} alt=""/>
      </div>
      <div className={classes.profile}>
        <div className={classes.profile__avatar}>
          <img src={props.profile.photos.small} alt=""/>
        </div>
        <div className={classes.profile__info}>
          <div className={classes.profile__name}>{props.profile.fullName}</div>
          <div className={classes.profile__date}>date of birth: 21 august</div>
          <div className={classes.profile__city}>city: Lviv</div>
          <div className={classes.profile__education}>{props.profile.lookingForAJobDescription}</div>
          <div className={classes.profile__site}>{props.profile.contacts.website}</div>
          <div>{props.profile.contacts.facebook}</div>
          <div>{props.profile.contacts.vk}</div>
          <div>{props.profile.contacts.twitter}</div>
          <div>{props.profile.contacts.instagram}</div>
          <div>{props.profile.contacts.youtube}</div>
          <div>{props.profile.contacts.github}</div>
          <div>{props.profile.contacts.mainlink}</div>
        </div>
      </div>
      <MyPostsContainer />
    </React.Fragment>
  )
};

export default ProfileInfo;
