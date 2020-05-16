import {createSelector} from 'reselect';
import {AppStateType} from "./reduxStore";

export const  getUsers = (state: AppStateType) => {
  return state.findUsers.users
};


export const getSuperSelector = createSelector(getUsers, (users) => {
  return users.filter(u => true)
});
