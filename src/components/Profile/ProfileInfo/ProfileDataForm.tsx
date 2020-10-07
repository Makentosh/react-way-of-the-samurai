import React, {FC} from 'react';
import classes from './ProfileInfo.module.scss';
import ProfileStatus from '../ProfileStatus';
import {createField, GetStringKeys, Input, Textarea} from '../../common/FormsControls/FormsControls';
import {InjectedFormProps, reduxForm} from 'redux-form';
import {ProfileType} from "../../../types/types";


type PropsType = {
  profile: ProfileType
  status: string
  error: string
  updateStatus: () => void
}

type ProfileTypeKeys = GetStringKeys<ProfileType>

const ProfileDataForm: FC<InjectedFormProps<ProfileType, PropsType> & PropsType> = ({handleSubmit, profile, error, ...props}) => {
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
                         updateStatus={props.updateStatus}/>

          <div className={classes.profile__name}>
            FullName: {createField<ProfileTypeKeys>('Full Name', 'fullName', [], Input)}
          </div>
          <div>looking for a job {profile.lookingForAJob ? 'yes' : 'no'}
            {createField<ProfileTypeKeys>('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
          </div>
          <div className={classes.profile__education}>
            my skills
            {createField<ProfileTypeKeys>('My skills', 'lookingForAJobDescription', [], Textarea)}
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

              //@ts-ignore
              {createField<ProfileTypeKeys>(key, 'contacts.' + key, [], Input)}
            </div>)}
          </div>

        </div>
      </form>

  )
};

export default reduxForm<ProfileType, PropsType>({form: 'editProfile'})(ProfileDataForm);
