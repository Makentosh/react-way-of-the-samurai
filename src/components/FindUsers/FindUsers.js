import React, {PureComponent} from 'react';
import './FindUsers.scss';
import {connect} from 'react-redux';
import {follow, setUsers, unfollow, setCurrentPage, setTotalCountUsers} from '../../redux/usersReducer';
import axios from 'axios'
import Users from './Users';


class FindUsers extends PureComponent {

  componentDidMount() {
    this.setUsers();
  }

  setUsers = () => {
      axios
          .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
          .then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalCountUsers(response.data.totalCount);
          })
  };

  onPageChanged = (pageNumber) => {
    this.props.setPage(pageNumber);
    axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(response => {
          this.props.setUsers(response.data.items)
        })
  };


  render() {

    return  (
        <Users onPageChanged={this.onPageChanged} {...this.props}/>
    )
  }

}

let mapStateToProps = (state) => {
  return {
    users: state.findUsers.users,
    pageSize: state.findUsers.pageSize,
    totalUsersCount: state.findUsers.totalUsersCount,
    currentPage: state.findUsers.currentPage
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
    },
    setPage: (pageNumber) => {
      dispatch(setCurrentPage(pageNumber))
    },
    setTotalCountUsers: (totalCount) => {
      dispatch(setTotalCountUsers(totalCount))
    }

  }
};


export default connect(mapStateToProps, mapDispatchToProps)(FindUsers);
