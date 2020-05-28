import {setUserSuccess} from './authReducer';

const SET_INITIALIZED = 'SET_INITIALIZED';


export type initialStateType = {
  initialized: boolean
}

let initialState: initialStateType = {
  initialized: false
};


const appReducer = (state = initialState, action: any): initialStateType => {
  switch (action.type) {
    case SET_INITIALIZED:
      return {
        ...state,
        initialized: true
      };

    default:
      return state;
  }
};

type initializedSuccessActionType = {
  type: typeof SET_INITIALIZED
}

export const setInitilazed = (): initializedSuccessActionType => ({
  type: SET_INITIALIZED
});


export const initializeApp = () => (dispatch: any) => {
  let promise = dispatch(setUserSuccess());

  Promise.all([promise])
      .then(() => {
        dispatch(setInitilazed())
      });

};



export default appReducer;
