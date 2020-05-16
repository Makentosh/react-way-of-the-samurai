import React from 'react';
import User from '../User';
import Pagination from '../../Pagination';
import {usersType} from "../../../types/types";


export type PropsType = {
    onPageChanged: (any: number | null) => void
    pageSize:number
    currentPage: number
    totalUsersCount: number
    users: Array<usersType>
    followingInProgress: number
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}

const Users: React.FC<PropsType> = (props) => {

    return (
      <div className="users-page">
        <div className="users-page__title-wrap">
          <div className="users-page__title">
            Users
          </div>
        </div>
        <Pagination onPageChanged={props.onPageChanged}
                    pageSize={props.pageSize}
                    currentPage={props.currentPage}
                    totalUsersCount={props.totalUsersCount}/>

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
