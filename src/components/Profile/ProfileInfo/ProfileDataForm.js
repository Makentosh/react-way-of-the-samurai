import React from 'react';
import classes from './ProfileInfo.module.scss';
import ProfileStatus from '../ProfileStatus';
import {createField, Input, Textarea} from '../../common/FormsControls/FormsControls';
import {reduxForm} from 'redux-form';


const ProfileDataForm = ({handleSubmit, profile, error, ...props}) => {
  return (
      <form onSubmit={handleSubmit}>
        <div className={classes.profile__info}>
          <div>Edit your profile</div>
          <div>
            <button type={'submit'}>save changes</button>
          </div>

          {error &&

          <div className={"form-summary-error"}>
            {error}
          </div>
          }

          <ProfileStatus status={props.status}
                         id={profile.userId}
                         updateStatus={props.updateStatus}/>

          <div className={classes.profile__name}>
            FullName: {createField('Full Name', 'fullName', [], Input)}
          </div>
          <div>looking for a job {profile.lookingForAJob ? 'yes' : 'no'}
            {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
          </div>
          <div className={classes.profile__education}>
            my skills
            {createField('My skills', 'lookingForAJobDescription', [], Textarea)}
          </div>
          <div>
            about me
            {createField('About me', 'aboutMe', [], Textarea)}
          </div>

          <div>
            Contacts:
            {Object.keys(profile.contacts).map((key, index) =>
            <div>
              {key}
              {createField(key, 'contacts.' + key, [], Input)}
            </div>)}
          </div>

        </div>
      </form>

  )
};

export default reduxForm({form: 'editProfile'})(ProfileDataForm);
