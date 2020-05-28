import {usersAPI} from '../api/api';
import {usersType} from "../types/types";
import {AppStateType} from "./reduxStore";
import {ThunkAction} from "redux-thunk";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';



let initialState = {
  users: [] as Array<usersType>,
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as Array<number>
};

export type initialStateType = typeof initialState

const usersReducer = (state = initialState, action: ActionsType): initialStateType => {

  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: true}
          }
          return user;
        })

      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: false}
          }
          return user;
        })

      };

    case SET_USERS:
      return {
        ...state,
        users: action.users
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage

      };

    case SET_TOTAL_USER_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount
      };

    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      };

    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.followingInProgress
            ? [...state.followingInProgress, action.userId]
            : state.followingInProgress.filter(id => id !== action.userId)
      };

    default:
      return state;
  }
};


type ActionsType = followSuccesType | unfollowSucessType | setUserType | setCurrentPageType | setTotalCounterUsersType | setLoadingType | toggleFollowingType

type followSuccesType = {
  type:  typeof FOLLOW
  userId: number
}

export const followSuccess = (userId: number): followSuccesType => ({
  type:  FOLLOW,
  userId
});


type  unfollowSucessType = {
  type:  typeof UNFOLLOW
  userId: number
}

export const unfollowSuccess = (userId: number): unfollowSucessType => {
  return {
    type:  UNFOLLOW,
    userId
  }};


type setUserType = {
  type: typeof SET_USERS
  users: Array<usersType>
}

export const setUsers = (users: Array<usersType>): setUserType => {
  return {
    type: SET_USERS,
    users
  }
};



type setCurrentPageType = {
  type: typeof SET_CURRENT_PAGE
  currentPage: number
}

export const setCurrentPage = (currentPage: number): setCurrentPageType => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage
  }
};

type setTotalCounterUsersType = {
  type: typeof SET_TOTAL_USER_COUNT
  totalUsersCount: number
}

export const setTotalCountUsers = (totalUsersCount: number): setTotalCounterUsersType => {
  return {
    type: SET_TOTAL_USER_COUNT,
    totalUsersCount
  }
};


type setLoadingType = {
  type: typeof TOGGLE_IS_FETCHING
  isFetching: boolean
}

export const setLoading = (isFetching: boolean): setLoadingType => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching
  }
};

type toggleFollowingType = {
  type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
  followingInProgress: boolean
  userId: number
}

export const toggleFollowing = (followingInProgress: boolean, userId: number): toggleFollowingType => {
  return {
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    followingInProgress,
    userId
  }
};


//thunk

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

export const getUsersThunkCreator = (currentPage: number,
                                     pageSize: number): ThunkType => async (dispatch) => {

    dispatch(setLoading(true));
    dispatch(setCurrentPage(currentPage));
    let data = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(setLoading(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalCountUsers(data.totalCount));

};


export const follow = (id: number): ThunkType => async (dispatch) => {

  dispatch(toggleFollowing(true, id));
  let data = await usersAPI.getFollow(id);
  if (data.resultCode === 0) dispatch(followSuccess(id));
  dispatch(toggleFollowing(false, id));
};

export const unfollow = (id: number): ThunkType => async (dispatch) => {
  dispatch(toggleFollowing(true, id));
  let data = await usersAPI.getUnfollow(id);
  if (data.resultCode === 0) dispatch(unfollowSuccess(id));

  dispatch(toggleFollowing(false, id));

};


export default usersReducer;
