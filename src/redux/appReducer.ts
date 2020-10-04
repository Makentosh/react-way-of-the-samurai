import {setUserSuccess} from './authReducer';
import {InferActionsTypes} from "./reduxStore";


let initialState = {
  initialized: false
};

export type initialStateType = typeof initialState;

type ActionsType = InferActionsTypes<typeof actions>

const appReducer = (state = initialState, action: ActionsType): initialStateType => {
  switch (action.type) {
    case 'SET_INITIALIZED':
      return {
        ...state,
        initialized: true
      };

    default:
      return state;
  }
};


export const actions = {
  setInitilazed: () => ({type: 'SET_INITIALIZED'} as const)
};



export const initializeApp = () => (dispatch: any) => {
  let promise = dispatch(setUserSuccess());

  Promise.all([promise])
      .then(() => {
        dispatch(actions.setInitilazed())
      });

};



export default appReducer;
