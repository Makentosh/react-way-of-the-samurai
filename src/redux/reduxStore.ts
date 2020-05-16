import {combineReducers, createStore, compose, applyMiddleware} from 'redux';
import profileReducer from './profileReducer';
import messageReducer from './messageReducer';
import sideBarReducer from './sideBarReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import appReducer from './appReducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  messagePage: messageReducer,
  sideBar: sideBarReducer,
  findUsers: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer
});


type reducersType= typeof reducers;

export type AppStateType = ReturnType<reducersType>


// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunk)
));

export default store;

