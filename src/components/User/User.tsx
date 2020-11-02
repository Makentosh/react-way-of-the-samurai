import React from 'react';
import './User.scss';
import userPhoto from '../../image/avatar.jpg';
import {NavLink, withRouter} from 'react-router-dom';
import {usersType} from '../../types/types';
import {Button} from 'antd';
import {startChatFromUser} from '../../api/dialogs';


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

  let handleStartDialog = (id: number) => {
    startChatFromUser(id)
        .then(res => {
          // @ts-ignore
          props.history.push({
            pathname: '/dialogs',
          })
        })
  }

  return (
    <li key={props.id} className="users-list__item">
      <div className="user">
        <div className="user__part user__avatar">
          <div className="user__photo">
            <NavLink to={`/profile/${props.id}`}>
              <img src={photos.small !== null ? photos.large : userPhoto} alt="avatar"/>
            </NavLink>
          </div>
          <div className="user__inner">
            <div className="user__follow">
              { followed
                  ? <Button onClick={unfollow}
                            type="primary"
                            disabled={props.followingInProgress.some(id => id === props.id)}>
                    Unfollow
                  </Button>
                  : <Button type="primary"
                            onClick={follow}
                            disabled={props.followingInProgress.some(id => id === props.id)}>
                    Follow
                  </Button>
              }
            </div>
            <div className="user__chat">
              <Button type="ghost"
                      onClick={() => handleStartDialog(props.id)}>
                Start Dialog
              </Button>
            </div>
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

// @ts-ignore
export default withRouter(User);
