import React from 'react';
import {addMessageDialogsCreator, updateMessageText} from '../../redux/messageReducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';


const DialogsContainer = () => {

  return (
      <StoreContext.Consumer>
        {(store) => {
          let state = store.getState();

          let addNewMessage = () => {
            store.dispatch(addMessageDialogsCreator());
          };

          let changeMessage = (newTextMessage) => {
            store.dispatch(updateMessageText(newTextMessage))
          };

          return  <Dialogs changeMessage={changeMessage}
                             addNewMessage={addNewMessage}
                             dialogs={state.messagePage.dialogs}
                             messages={state.messagePage.messages}
                             newDialogMessageText={state.messagePage.newDialogMessageText}/>
        }}
      </StoreContext.Consumer>

  )
};

export default DialogsContainer;
