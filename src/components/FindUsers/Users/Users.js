import React from 'react';
import User from '../User';
import Pagination from '../../Pagination';

const Users = (props) => {

  return (
      <div className="users-page">
        <div className="users-page__title-wrap">
          <div className="users-page__title">
            Users
          </div>
        </div>
        <Pagination {...props}/>
        <div className="users-page__content">
          <ul className="users-list">
            {props.users.map(user => <User key={user.id}
                                                {...user}
                                                followingInProgress={props.followingInProgress}
                                                toggleFollowing={props.toggleFollowing}
                                                followUser={props.followUser}
                                                unfollowUser={props.unfollowUser}/>)}
          </ul>
        </div>
      </div>
  )
};

export default Users;
