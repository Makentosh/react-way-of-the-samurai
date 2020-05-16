import React, {PureComponent} from 'react';
import './FindUsers.scss';
import {connect} from 'react-redux';
import { getUsersThunkCreator, follow, unfollow} from '../../redux/usersReducer';
import Users from './Users';
import Loader from '../Loader';
import {getSuperSelector} from '../../redux/users-selector';
import {AppStateType} from "../../redux/reduxStore";
import {usersType} from "../../types/types";


type MapStatePropsType = {
    totalUsersCount: number
    currentPage: number
    pageSize: number
    users:  Array<usersType>
    isFetching: boolean
    followingInProgress: Array<number>
}

type MapDispatchPropsType = {
    getUsersThunkCreator: (pageNumber:number,  pageSize: number) => void
    unfollow: (userId:number) => void
    follow: (userId:number) => void
}

type OwnPropsType = {}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class FindUsers extends PureComponent<PropsType> {

  componentDidMount() {
    let {currentPage, pageSize} = this.props;
    this.props.getUsersThunkCreator(currentPage, pageSize)
  }


  onPageChanged = (pageNumber: number) => {
    let {pageSize} = this.props;

    this.props.getUsersThunkCreator(pageNumber, pageSize)
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

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    users: getSuperSelector(state),
    pageSize: state.findUsers.pageSize,
    totalUsersCount: state.findUsers.totalUsersCount,
    currentPage: state.findUsers.currentPage,
    isFetching: state.findUsers.isFetching,
    followingInProgress: state.findUsers.followingInProgress
  }
};



export default connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps,
    {
      getUsersThunkCreator,
      follow,
      unfollow
    })(FindUsers);
