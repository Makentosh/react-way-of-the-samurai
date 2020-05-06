import React, { useState } from 'react';
import classes from './ProfileInfo.module.scss';
import Loader from '../../Loader';
import MyPostsContainer from '../MyPosts/MyPostsContainer';
import ProfileStatus from '../ProfileStatus/ProfileStatus';
import ProfileDataForm from './ProfileDataForm';
import Contact from './Contact';


const ProfileInfo = ({profile, saveProfile, ...props}) => {

  const [editMode, setEditMode] = useState(false);


  let handlerEditProfile = () => {
    setEditMode(!editMode)
  };

  if(!profile.photos) {
    return <Loader/>
  }


  let selectedPhoto = (e) => {
      if(e.target.files.length) {
        props.savePhoto(e.target.files[0])
      }
  };

  let onSubmit = (formData) => {
      saveProfile(formData).then(() => {
        setEditMode(false);
      });
  };

  return (

    <React.Fragment>
      <div className={classes.profile__image}>
        {/*todo img*/}
      </div>
      <div className={classes.profile}>
        <div className={classes.profile__avatar}>
          <img src={profile.photos.small} alt=""/>
          {props.isOwner && <input type="file" onChange={selectedPhoto}/>}
        </div>

        {editMode
            ? <ProfileDataForm profile={profile}
                               onSubmit={onSubmit}
                               initialValues={profile}
                               updateStatus={props.updateStatus}/>
            : <ProfileData profile={profile}
                           handlerEditProfile={handlerEditProfile}
                           updateStatus={props.updateStatus}
                           isOwner={props.isOwner}/>}

      </div>
      <MyPostsContainer />
    </React.Fragment>
  )
};




const ProfileData = ({profile, ...props}) => {
  return (
      <div className={classes.profile__info}>
        {props.isOwner ?
          <div>
          <button onClick={props.handlerEditProfile}>
            Edit Profile
          </button>
        </div>
        : null }


        <ProfileStatus status={props.status}
                       id={profile.userId}
                       updateStatus={props.updateStatus}/>

        <div className={classes.profile__name}>
          FullName: {profile.fullName}
        </div>
        <div className={classes.profile__education}>
          Looking for job
          {profile.lookingForAJobDescription}
        </div>

        <div>
          Contacts:
          {Object.keys(profile.contacts).map((key, index) => <Contact key={index}
                                                                      contactTitle={key}
                                                                      contactValue={profile.contacts[key]}> </Contact>)}
        </div>

      </div>
  )
};


export default ProfileInfo;
