import React from 'react';
import './User.scss';

const User = ({id, photoUrl, followed, fullName, status, location, ...props}) => {
  return (
    <li key={id} className="users-list__item">
      <div className="user">
        <div className="user__part user__avatar">
          <div className="user__photo">
            <img src={photoUrl} alt="avatar"/>
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
              {fullName}
            </div>
            <div className="user__location">
              { location.country }, { location.city }
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
