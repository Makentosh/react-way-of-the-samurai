import React from 'react';
import classes from './ProfileInfo.module.scss';
import Loader from '../../Loader';


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
          <div className={classes.profile__education}>education: wayup</div>
          <div className={classes.profile__site}>website: none</div>
        </div>
      </div>
    </React.Fragment>
  )
};

export default ProfileInfo;
