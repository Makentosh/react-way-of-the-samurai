import {createSelector} from 'reselect';

export const  getUsers = (state) => {
  return state.findUsers.users
};


export const getSuperSelector = createSelector(getUsers, (users) => {
  return users.filter(u => true)
});
