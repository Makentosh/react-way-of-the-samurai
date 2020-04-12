import React, {PureComponent} from 'react';
import './FindUsers.scss';
import {connect} from 'react-redux';
import {follow, setUsers, unfollow, setCurrentPage, setTotalCountUsers, setLoading} from '../../redux/usersReducer';
import Users from './Users';
import Loader from '../Loader';
import {usersAPI} from '../../api/api';



class FindUsers extends PureComponent {

  componentDidMount() {
    this.setUsers();
  }

  setUsers = () => {
    this.props.loadingFetch(true);

    usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
          .then(data => {
            this.props.loadingFetch(false);
            this.props.setUsers(data.items);
            this.props.setTotalCountUsers(data.totalCount);
          })
  };

  onPageChanged = (pageNumber) => {
    this.props.setPage(pageNumber);
    this.props.loadingFetch(true);

    usersAPI.getUsers(pageNumber, this.props.pageSize)
        .then(data => {
          this.props.loadingFetch(false);
          this.props.setUsers(data.items)
        })
  };


  render() {

    return  (
        <React.Fragment>
          {this.props.isFetching
              ? <Loader/>
              : <Users onPageChanged={this.onPageChanged} {...this.props}/> }

        </React.Fragment>

    )
  }

}

let mapStateToProps = (state) => {
  return {
    users: state.findUsers.users,
    pageSize: state.findUsers.pageSize,
    totalUsersCount: state.findUsers.totalUsersCount,
    currentPage: state.findUsers.currentPage,
    isFetching: state.findUsers.isFetching
  }
};

// let mapDispatchToProps = (dispatch) => {
//   return {
//     followUser: (userId) => {
//       dispatch(follow(userId))
//     },
//     unfollowUser: (userId) => {
//       dispatch(unfollow(userId))
//     },
//     setUsers: (users) => {
//       dispatch(setUsers(users))
//     },
//     setPage: (pageNumber) => {
//       dispatch(setCurrentPage(pageNumber))
//     },
//     setTotalCountUsers: (totalCount) => {
//       dispatch(setTotalCountUsers(totalCount))
//     },
//     loadingFetch: (isFetching) => {
//       dispatch(setLoading(isFetching))
//     }
//
//   }
// };


export default connect(mapStateToProps,
    {
      followUser: follow,
      unfollowUser: unfollow,
      setUsers: setUsers,
      setPage: setCurrentPage,
      setTotalCountUsers: setTotalCountUsers,
      loadingFetch: setLoading
    })(FindUsers);
