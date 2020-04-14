import {usersAPI} from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []
};

const usersReducer = (state = initialState, action) => {

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

export const followSuccess = (userId) => ({
  type:  FOLLOW,
  userId
});

export const unfollowSuccess = (userId) => {
  return {
    type:  UNFOLLOW,
    userId
  }};

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users
  }
};

export const setCurrentPage = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage
  }
};

export const setTotalCountUsers = (totalUsersCount) => {
  return {
    type: SET_TOTAL_USER_COUNT,
    totalUsersCount
  }
};

export const setLoading = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching
  }
};

export const toggleFollowing = (followingInProgress, userId) => {
  return {
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    followingInProgress,
    userId
  }
};


//thunk

export const getUsersThunkCreator = (currentPage, pageSize) => (dispatch) => {

    dispatch(setLoading(true));

    usersAPI.getUsers(currentPage, pageSize)
        .then(data => {
          dispatch(setLoading(false));
          dispatch(setUsers(data.items));
          dispatch(setTotalCountUsers(data.totalCount));
        })
};


export const follow = (id) => (dispatch) => {

  dispatch(toggleFollowing(true, id));

  usersAPI.getFollow(id)
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(followSuccess(id))
        }

        dispatch(toggleFollowing(false, id));
      })

};

export const unfollow = (id) => (dispatch) => {

  dispatch(toggleFollowing(true, id));

  usersAPI.getUnfollow(id)
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(unfollowSuccess(id))
        }

        dispatch(toggleFollowing(false, id));
      })

};


export default usersReducer;
