import React from 'react';
import './User.scss';
import userPhoto  from  '../../../image/avatar.jpg';
import {NavLink} from 'react-router-dom';
import {usersType} from "../../../types/types";


export type PropsType = {
  unfollow: (userId: number) => void
  follow: (userId: number) => void
  location: string | null
  id: number
  followingInProgress: Array<number>
}


type PropsTypeState = usersType & PropsType


const User: React.FC<PropsTypeState> = ({ photos, followed, name, status, location, ...props}) => {


  let follow = () => {
    props.follow(props.id)
  };

  let unfollow = () => {
    props.unfollow(props.id)
  };

  return (
    <li key={props.id} className="users-list__item">
      <div className="user">
        <div className="user__part user__avatar">
          <div className="user__photo">
            <NavLink to={`/profile/${props.id}`}>
              <img src={photos.small !== null ? photos.large : userPhoto} alt="avatar"/>
            </NavLink>
          </div>
          <div className="user__follow">
            { followed
                ? <button type="button"
                          onClick={unfollow}
                          disabled={props.followingInProgress.some(id => id === props.id)}
                          className="user__btn">
                  Unfollow
                </button>
                : <button type="button"
                          onClick={follow}
                          disabled={props.followingInProgress.some(id => id === props.id)}
                          className="user__btn">
                  Follow
                </button>
            }
          </div>
        </div>
        <div className="user__part user__info">
          <div className="user__info-inner">
            <div className="user__name">
              {name}
            </div>
            <div className="user__location">
              {/*{ location.country }, { location.city }*/}
            </div>
          </div>
          <div className="user__status">
            { status }
          </div>
        </div>
      </div>
    </li>
  )
};

export default User;
