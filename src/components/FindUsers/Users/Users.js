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
        <Pagination onChange={props.onPageChanged}
                    currentPage={props.currentPage}
                    totalUsersCount={props.totalUsersCount}
                    pageSize={props.pageSize}/>
        <div className="users-page__content">
          <ul className="users-list">
            {props.users.map(user => <User key={user.id}
                                                {...user}
                                                follow={props.follow}
                                                unfollow={props.unfollow}
                                                followingInProgress={props.followingInProgress}/>)}
          </ul>
        </div>
      </div>
  )
};

export default Users;
