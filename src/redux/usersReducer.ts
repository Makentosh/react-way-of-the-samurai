import {usersAPI} from '../api/api';
import {usersType} from "../types/types";
import {AppStateType, InferActionsTypes} from "./reduxStore";
import {ThunkAction} from "redux-thunk";

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
    case 'FOLLOW':
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: true}
          }
          return user;
        })

      };

    case 'UNFOLLOW':
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: false}
          }
          return user;
        })

      };

    case 'SET_USERS':
      return {
        ...state,
        users: action.users
      };

    case 'SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.currentPage

      };

    case 'SET_TOTAL_USER_COUNT':
      return {
        ...state,
        totalUsersCount: action.totalUsersCount
      };

    case 'TOGGLE_IS_FETCHING':
      return {
        ...state,
        isFetching: action.isFetching
      };

    case 'TOGGLE_IS_FOLLOWING_PROGRESS':
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


type ActionsType = InferActionsTypes<typeof actions>

export const actions = {
  followSuccess: (userId: number) => ({type:  'FOLLOW', userId} as const),
  unfollowSuccess: (userId: number) => ({type:  'UNFOLLOW', userId} as const),
  setUsers: (users: Array<usersType>) => ({type: 'SET_USERS', users} as const),
  setCurrentPage: (currentPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage} as const),
  setTotalCountUsers: (totalUsersCount: number) =>  ({type: 'SET_TOTAL_USER_COUNT', totalUsersCount} as const),
  setLoading: (isFetching: boolean)  => ({type: 'TOGGLE_IS_FETCHING', isFetching} as const),
  toggleFollowing: (followingInProgress: boolean, userId: number) => ({type: 'TOGGLE_IS_FOLLOWING_PROGRESS', followingInProgress, userId} as const)
}





//thunk

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

export const getUsersThunkCreator = (currentPage: number,
                                     pageSize: number): ThunkType => async (dispatch) => {

    dispatch(actions.setLoading(true));
    dispatch(actions.setCurrentPage(currentPage));
    let data = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(actions.setLoading(false));
    dispatch(actions.setUsers(data.items));
    dispatch(actions.setTotalCountUsers(data.totalCount));

};


export const follow = (id: number): ThunkType => async (dispatch) => {

  dispatch(actions.toggleFollowing(true, id));
  let data = await usersAPI.getFollow(id);
  if (data.resultCode === 0) dispatch(actions.followSuccess(id));
  dispatch(actions.toggleFollowing(false, id));
};

export const unfollow = (id: number): ThunkType => async (dispatch) => {
  dispatch(actions.toggleFollowing(true, id));
  let data = await usersAPI.getUnfollow(id);
  if (data.resultCode === 0) dispatch(actions.unfollowSuccess(id));

  dispatch(actions.toggleFollowing(false, id));

};


export default usersReducer;
