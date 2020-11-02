import React from 'react';
import User from '../User/index';
import {usersType} from "../../types/types";
import {FilterType} from '../../redux/usersReducer';


export type PropsType = {
    users: Array<usersType>
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    filter: FilterType
}

const Users: React.FC<PropsType> = ({...props}) => {

    return (
      <div className="users-page">
        <div className="users-page__title-wrap">
          <div className="users-page__title">
            Users
          </div>
        </div>



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
