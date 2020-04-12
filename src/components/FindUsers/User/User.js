import React from 'react';
import './User.scss';
import userPhoto  from  '../../../image/avatar.jpg';
import {NavLink} from 'react-router-dom';
import {usersAPI} from '../../../api/api';


const User = ({ photos, followed, name, status, location, ...props}) => {


  let follow = () => {
    props.toggleFollowing(true, props.id);
      usersAPI.getFollow(props.id)
        .then(data => {
          if (data.resultCode === 0) {
            props.followUser(props.id)
          }

          props.toggleFollowing(false, props.id);
        })
  };

  let unfollow = () => {
    props.toggleFollowing(true, props.id);
    usersAPI.getUnfollow(props.id)
      .then(data => {
        if (data.resultCode === 0) {
          props.unfollowUser(props.id)
        }
        props.toggleFollowing(false, props.id);
      })
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
