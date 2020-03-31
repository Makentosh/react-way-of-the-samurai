import React from 'react';
import {addMessageDialogsCreator, updateMessageText} from '../../redux/messageReducer';
import Dialogs from './Dialogs';


const DialogsContainer = props => {
  let state = props.store.getState().messagePage;


  let addNewMessage = () => {
    props.store.dispatch(addMessageDialogsCreator());
  };

  let changeMessage = (newTextMessage) => {
    props.store.dispatch(updateMessageText(newTextMessage))
  };


  return (
    <Dialogs changeMessage={changeMessage}
             addNewMessage={addNewMessage}
              dialogs={state.dialogs}
              messages={state.messages}
              newDialogMessageText={state.newDialogMessageText}/>
  )
};

export default DialogsContainer;
