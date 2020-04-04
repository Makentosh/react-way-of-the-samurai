import React from 'react';
import './FindUsers.scss';
import {connect} from 'react-redux';
import {follow, setUsers, unfollow} from '../../redux/usersReducer';


const FindUsers = props => {
  console.log(props)
  if (props.users.length === 0) {
    props.setUsers(
        [
          {id: 1, followed: false, photoUrl: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg', fullName: 'Igor A.', status: 'i am boss', location: { city: 'Minsk', country: 'Belarus'}},
          {id: 2, followed: true,  photoUrl: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg', fullName: 'Petr T.', status: 'lorem 3545d dfg', location: { city: 'Kiev', country: 'Ukraine'}},
          {id: 3, followed: false,  photoUrl: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg', fullName: 'Ivan N.', status: 'lorem ipsun 2454', location: { city: 'Warzshawa', country: 'Poland'}},
          {id: 4, followed: true,  photoUrl: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg', fullName: 'Jack T.', status: 'lorem ipsun ', location: { city: 'Rym', country: 'Italy'}},
        ]
    );
  }

  return  (
    <div>
      {props.users.map(user => <div key={user.id}>
        {user.location.city}{user.fullName}
        { user.followed
            ? <button onClick={() => props.unfollowUser(user.id)}>unfollow</button>
            : <button onClick={() => props.followUser(user.id)}>follow</button>
        }

        <div style={{width: 100 + 'px', borderRadius: 100 + '%'}}>
          <img style={{ borderRadius: 100 + '%'}} src={user.photoUrl} alt=""/>
        </div>

      </div>)}
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
