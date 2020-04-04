import {combineReducers, createStore} from 'redux';
import profileReducer from './profileReducer';
import messageReducer from './messageReducer';
import sideBarReducer from './sideBarReducer';
import usersReducer from './usersReducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  messagePage: messageReducer,
  sideBar: sideBarReducer,
  findUsers: usersReducer
});

let store = createStore(reducers);

export default store;

