import {combineReducers, createStore} from 'redux';
import profileReducer from './profileReducer';
import messageReducer from './messageReducer';
import sideBarReducer from './sideBarReducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  messagePage: messageReducer,
  sideBar: sideBarReducer
});

let store = createStore(reducers);

export default store;

