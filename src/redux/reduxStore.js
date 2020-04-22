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

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

let store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunk)
));

export default store;

