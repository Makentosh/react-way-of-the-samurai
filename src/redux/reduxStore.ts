import {combineReducers, createStore, compose, applyMiddleware, Action} from 'redux';
import profileReducer from './profileReducer';
import messageReducer from './messageReducer';
import sideBarReducer from './sideBarReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import thunk, {ThunkAction} from "redux-thunk";
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


type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never

export type InferActionsTypes<T extends {[key: string]:  (...args: any[])=>any }> = ReturnType<PropertiesTypes<T>>

export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunk)
));

export default store;

