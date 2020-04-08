import React, {PureComponent} from 'react';
import './FindUsers.scss';
import {connect} from 'react-redux';
import {follow, setUsers, unfollow, setCurrentPage, setTotalCountUsers, setLoading} from '../../redux/usersReducer';
import axios from 'axios'
import Users from './Users';
import Loader from '../Loader';



class FindUsers extends PureComponent {

  componentDidMount() {
    this.setUsers();
  }

  setUsers = () => {
    this.props.loadingFetch(true);

      axios
          .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
          .then(response => {
            this.props.loadingFetch(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalCountUsers(response.data.totalCount);
          })
  };

  onPageChanged = (pageNumber) => {
    this.props.setPage(pageNumber);
    this.props.loadingFetch(true);
    axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(response => {
          this.props.loadingFetch(false);
          this.props.setUsers(response.data.items)
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
