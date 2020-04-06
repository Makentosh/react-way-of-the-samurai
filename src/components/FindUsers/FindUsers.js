import React, {PureComponent} from 'react';
import './FindUsers.scss';
import {connect} from 'react-redux';
import {follow, setUsers, unfollow, setCurrentPage, setTotalCountUsers} from '../../redux/usersReducer';
import User from './User';
import axios from 'axios'


class FindUsers extends PureComponent {
  constructor(props) {
    super(props);

  }


  componentDidMount() {
    this.setUsers();
    console.log(this.props)
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
    let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

    let pages = [];

    for (let i = 1; i <= pageCount; i++ ) {
      pages.push(i)
    }

    return  (
        <div className="users-page">
          <div className="users-page__title-wrap">
            <div className="users-page__title">
              Users
            </div>
          </div>
          <div className="pagination">
            { pages.map((page, index) => {
                return <button  key={index} type="button" className={`pagination__item ${this.props.currentPage === page ? 'active' : ''}`}
                          onClick={() => this.onPageChanged(page)}>
                  {page}
                </button>}
            )}
          </div>
          <div className="users-page__content">
            <ul className="users-list">
              {this.props.users.map(user => <User key={user.id}
                                             {...user}
                                             followUser={this.props.followUser}
                                             unfollowUser={this.props.unfollowUser}/>)}
            </ul>
          </div>
        </div>
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
