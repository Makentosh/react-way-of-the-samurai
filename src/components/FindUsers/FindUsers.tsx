import React, {FC, useEffect} from 'react';
import './FindUsers.scss';
import {connect} from 'react-redux';
import {FilterType, follow, getUsersThunkCreator, unfollow} from '../../redux/usersReducer';
import Users from '../Users';
import Loader from '../Loader';
import {getSuperSelector} from '../../redux/users-selector';
import {AppStateType} from '../../redux/reduxStore';
import {usersType} from '../../types/types';
import Pagination from '../Pagination/Pagination';
import UsersSearch from '../UsersSearch/UsersSearch';
import {useHistory} from 'react-router';
import * as queryString from 'querystring';


type MapStatePropsType = {
    users: Array<usersType>
    isFetching: boolean
    followingInProgress: Array<number>
    filter: FilterType

    pageSize: number
    currentPage: number
    totalUsersCount: number
}

type MapDispatchPropsType = {
    getUsersThunkCreator: (pageNumber: number, pageSize: number, filter: FilterType) => void
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}

type OwnPropsType = {}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

const FindUsers: FC<PropsType> = ({...props}) => {
    const history = useHistory();


    useEffect(() => {
        let {currentPage, pageSize, filter} = props;

        let parsedQuery = queryString.parse(history.location.search.substr(1));
        let actualFilter = filter;

        let actualPage = Number(parsedQuery?.page) ? Number(parsedQuery?.page) : currentPage;
        if (parsedQuery.term) actualFilter = {...actualFilter, term: parsedQuery.term as string};
        if (parsedQuery.friend) actualFilter = {
            ...actualFilter,
            friend: parsedQuery.friend === 'null' ? null : parsedQuery.friend === 'true' ? true : false
        };

        props.getUsersThunkCreator(actualPage, pageSize, actualFilter)
    }, [props.currentPage, props.pageSize]); //eslint-disable-line

    useEffect(() => {
        history.push({
            pathname: window.location.pathname,
            search: `?term=${props.filter.term}&friend=${props.filter.friend}&page=${props.currentPage}`
        })
    }, [props.filter, history, props.currentPage]);


    let onPageChanged = (pageNumber: number) => {
        let {pageSize, filter} = props;

        props.getUsersThunkCreator(pageNumber, pageSize, filter)
    };

    let onFilterChanged = (filter: FilterType) => {
        let {pageSize} = props;
        props.getUsersThunkCreator(1, pageSize, filter)
    };


    return (
        <React.Fragment>
            <Pagination onPageChanged={onPageChanged}
                        pageSize={props.pageSize}
                        currentPage={props.currentPage}
                        totalUsersCount={props.totalUsersCount}/>
            <UsersSearch filter={props.filter}
                         onFilterChanged={onFilterChanged}/>
            {props.isFetching
                ? <Loader/>
                : <Users {...props}/>}

        </React.Fragment>

    )

};

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


export default connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
    getUsersThunkCreator,
    follow,
    unfollow
})(FindUsers);
