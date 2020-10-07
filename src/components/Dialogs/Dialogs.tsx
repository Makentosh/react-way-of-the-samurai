import React, {ReactNode} from 'react';
import classes from './Dialogs.module.scss';
import DialogItem from './DialogItem';
import Message from './Message/Message';
import MessageForm from './MessageForm';
import {initialStateType} from "../../redux/messageReducer";


type OwnPropsType = {
    messagePage: initialStateType
    addMessageDialogsCreator: (newMessageBody: string) => void
    children: ReactNode
}

export type NewMassageFormType = {
    newMessageBody: string
}


const Dialogs: React.FC<OwnPropsType> = ({...props}) => {

  let addNewMessage = (value: {newMessageBody: string}) => {
    props.addMessageDialogsCreator(value.newMessageBody);
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs__title}>Dialogs</div>
      <div className={classes.dialogs__wrapper}>
        <ul className={classes.dialogs__users}>
          {props.messagePage.dialogs.map(user => <DialogItem key={user.name}
                                                             name={user.name}
                                                             avatar={user.avatar}
                                                             id={user.id}/>)}
        </ul>
        <div className={classes.dialogs__messages}>
          <div className={classes.dialogs__messagesWrap}>
            {props.messagePage.messages.map(message => <Message key={message.id} {...message}/>)}
          </div>
          <div className={classes.dialogs__newMessage}>
             <MessageForm onSubmit={addNewMessage}/>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Dialogs;
