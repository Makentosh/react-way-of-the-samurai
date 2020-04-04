import React from 'react';
import './FindUsers.scss';
import {connect} from 'react-redux';
import {follow, setUsers, unfollow} from '../../redux/usersReducer';
import User from './User';


const FindUsers = props => {
  console.log(props);
  if (props.users.length === 0) {
    props.setUsers(
        [
          {id: 1, followed: false, photoUrl: 'https://99px.ru/sstorage/1/2011/06/image_11406111707363332889.jpg', fullName: 'Igor A.', status: 'i am boss', location: { city: 'Minsk', country: 'Belarus'}},
          {id: 2, followed: true,  photoUrl: 'https://99px.ru/sstorage/1/2011/06/image_11406111707363332889.jpg', fullName: 'Petr T.', status: 'lorem 3545d dfg', location: { city: 'Kiev', country: 'Ukraine'}},
          {id: 3, followed: false,  photoUrl: 'https://99px.ru/sstorage/1/2011/06/image_11406111707363332889.jpg', fullName: 'Ivan N.', status: 'lorem ipsun 2454', location: { city: 'Warzshawa', country: 'Poland'}},
          {id: 4, followed: true,  photoUrl: 'https://99px.ru/sstorage/1/2011/06/image_11406111707363332889.jpg', fullName: 'Jack T.', status: 'lorem ipsun ', location: { city: 'Rym', country: 'Italy'}},
        ]
    );
  }


  return  (
      <div className="users-page">
        <div className="users-page__title-wrap">
          <div className="users-page__title">
            Users
          </div>
        </div>

        <div className="users-page__content">
          <ul className="users-list">
            {props.users.map(user => <User key={user.id} {...user}/>)}
          </ul>
          <div className="users-page__more-users">
            <button type="button" className="more-btn">
              <span className="more-btn__content">
                 Show more
              </span>
              <div className="loader"/>
            </button>
          </div>
        </div>
      </div>
  )
};

let mapStateToProps = (state) => {
  return {
    users: state.findUsers.users
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    followUser: (userId) => {
      dispatch(follow(userId))
    },
    unfollowUser: (userId) => {
      dispatch(unfollow(userId))
    },
    setUsers: (users) => {
      dispatch(setUsers(users))
    }
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(FindUsers);
