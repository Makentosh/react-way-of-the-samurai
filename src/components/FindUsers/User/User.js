import React from 'react';
import './User.scss';
import userPhoto  from  '../../../image/avatar.jpg';

const User = ({id, photos, followed, name, status, location, ...props}) => {
  return (
    <li key={id} className="users-list__item">
      <div className="user">
        <div className="user__part user__avatar">
          <div className="user__photo">
            <img src={photos.small !== null ? photos.large : userPhoto} alt="avatar"/>
          </div>
          <div className="user__follow">
            { followed
                ? <button type="button"
                          onClick={() => props.unfollowUser(id)}
                          className="user__btn">
                  Unfollow
                </button>
                : <button type="button"
                          onClick={() => props.followUser(id)}
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
