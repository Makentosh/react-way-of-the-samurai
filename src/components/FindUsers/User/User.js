import React from 'react';
import './User.scss';
import userPhoto  from  '../../../image/avatar.jpg';
import {NavLink} from 'react-router-dom';
import {usersAPI} from '../../../api/api';


const User = ({id, photos, followed, name, status, location, ...props}) => {

  let follow = () => {
      usersAPI.getFollow(id)
        .then(data => {
          if (data.resultCode === 0) {
            props.followUser(id)
          }
        })
  };

  let unfollow = () => {
    usersAPI.getUnfollow(id)
      .then(data => {
        if (data.resultCode === 0) {
          props.unfollowUser(id)
        }
      })
  };

  return (
    <li key={id} className="users-list__item">
      <div className="user">
        <div className="user__part user__avatar">
          <div className="user__photo">
            <NavLink to={`/profile/${id}`}>
              <img src={photos.small !== null ? photos.large : userPhoto} alt="avatar"/>
            </NavLink>
          </div>
          <div className="user__follow">
            { followed
                ? <button type="button"
                          onClick={unfollow}
                          className="user__btn">
                  Unfollow
                </button>
                : <button type="button"
                          onClick={follow}
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
