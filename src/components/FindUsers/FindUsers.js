import React, {PureComponent} from 'react';
import './FindUsers.scss';
import {connect} from 'react-redux';
import { setCurrentPage, getUsersThunkCreator, follow, unfollow} from '../../redux/usersReducer';
import Users from './Users';
import Loader from '../Loader';
import {getSuperSelector} from '../../redux/users-selector';



class FindUsers extends PureComponent {

  componentDidMount() {
    this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
  }


  onPageChanged = (pageNumber) => {
    this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
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
    users: getSuperSelector(state),
    pageSize: state.findUsers.pageSize,
    totalUsersCount: state.findUsers.totalUsersCount,
    currentPage: state.findUsers.currentPage,
    isFetching: state.findUsers.isFetching,
    followingInProgress: state.findUsers.followingInProgress
  }
};



export default connect(mapStateToProps,
    {
      setPage: setCurrentPage,
      getUsersThunkCreator,
      follow,
      unfollow
    })(FindUsers);


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
