import React, {ChangeEvent, FC, useState} from 'react';
import classes from './ProfileInfo.module.scss';
import Loader from '../Loader/index';
import MyPostsContainer from '../MyPosts/MyPostsContainer';
import ProfileStatus from '../ProfileStatus/ProfileStatus';
import ProfileDataForm from './ProfileDataForm';
import Contact from './Contact';
import {ContactsType, ProfileType} from "../../types/types";


type PropsType = {
    profile: ProfileType
    status: string
    saveProfile: (profile: ProfileType) => Promise<any>
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
}

const ProfileInfo: FC<PropsType> = ({profile, saveProfile, updateStatus, isOwner, ...props}) => {

    const [editMode, setEditMode] = useState(false);


    let handlerEditProfile = () => {
        setEditMode(!editMode)
    };

    if (!profile) {
        return <Loader/>
    }


    let selectedPhoto = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target?.files?.length) {
            props.savePhoto(e.target.files[0])
        }
    };

    let onSubmit = (formData: ProfileType) => {
        //todo: remove then
        saveProfile(formData)
            .then(() => {
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
                    {isOwner && <input type="file" onChange={selectedPhoto}/>}
                </div>

                {editMode
                    ? <ProfileDataForm profile={profile}
                                       onSubmit={onSubmit}
                                       initialValues={profile}
                                       // @ts-ignore
                                       updateStatus={updateStatus}/>
                    // @ts-ignore
                    : <ProfileData profile={profile}
                                   handlerEditProfile={handlerEditProfile}
                                   updateStatus={updateStatus}
                                   isOwner={isOwner}/>}

            </div>
            <MyPostsContainer/>
        </React.Fragment>
    )
};


type ProfileDataTypes = {
    profile: ProfileType
    isOwner: boolean
    updateStatus: (status: string) => void
    handlerEditProfile: () => void
    status: string
}

const ProfileData: FC<ProfileDataTypes> = ({profile, status, ...props}) => {
    return (
        <div className={classes.profile__info}>
            {props.isOwner ?
                <div>
                    <button onClick={props.handlerEditProfile}>
                        Edit Profile
                    </button>
                </div>
                : null}


            <ProfileStatus status={status}
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
                                                                                            contactValue={profile.contacts[key as keyof ContactsType]}/>)}
            </div>

        </div>
    )
};


export default ProfileInfo;
