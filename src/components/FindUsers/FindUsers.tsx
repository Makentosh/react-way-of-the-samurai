import React, {PureComponent} from 'react';
import './FindUsers.scss';
import {connect} from 'react-redux';
import {getUsersThunkCreator, follow, unfollow, FilterType} from '../../redux/usersReducer';
import Users from './Users';
import Loader from '../Loader';
import {getSuperSelector} from '../../redux/users-selector';
import {AppStateType} from "../../redux/reduxStore";
import {usersType} from "../../types/types";
import Pagination from '../Pagination/Pagination';
import UsersSearch from './UsersSearch/UsersSearch';


type MapStatePropsType = {
    users:  Array<usersType>
    isFetching: boolean
    followingInProgress: Array<number>
    filter: FilterType

    pageSize:number
    currentPage: number
    totalUsersCount: number
}

type MapDispatchPropsType = {
    getUsersThunkCreator: (pageNumber: number,  pageSize: number, filter: FilterType) => void
    unfollow: (userId: number) => void
    follow: (userId :number) => void
}

type OwnPropsType = {}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class FindUsers extends PureComponent<PropsType> {

  componentDidMount() {
    let {currentPage, pageSize, filter} = this.props;
    this.props.getUsersThunkCreator(currentPage, pageSize, filter)
  }


  onPageChanged = (pageNumber: number) => {
    let {pageSize, filter} = this.props;

    this.props.getUsersThunkCreator(pageNumber, pageSize, filter)
  };

  onFilterChanged = (filter: FilterType) => {
      let {pageSize} = this.props;
      this.props.getUsersThunkCreator(1, pageSize, filter)
  };


  render() {

    return  (
        <React.Fragment>
            <Pagination onPageChanged={this.onPageChanged}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        totalUsersCount={this.props.totalUsersCount}/>
            <UsersSearch onFilterChanged={this.onFilterChanged}/>
          {this.props.isFetching
              ? <Loader/>
              : <Users {...this.props}/> }

        </React.Fragment>

    )
  }

}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    users: getSuperSelector(state),
    pageSize: state.findUsers.pageSize,
    totalUsersCount: state.findUsers.totalUsersCount,
    currentPage: state.findUsers.currentPage,
    filter: state.findUsers.filter,
    isFetching: state.findUsers.isFetching,
    followingInProgress: state.findUsers.followingInProgress
  }
};



export default connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {getUsersThunkCreator, follow, unfollow})(FindUsers);
