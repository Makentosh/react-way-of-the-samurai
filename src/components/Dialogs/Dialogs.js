import React from 'react';
import classes from './Dialogs.module.scss';
import DialogItem from './DialogItem';
import Message from './Message/Message';


const Dialogs = props => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs__title}>Dialogs</div>
      <div className={classes.dialogs__wrapper}>
        <ul className={classes.dialog__users}>
          {props.dialogs.map(user => <DialogItem key={user.name} {...user}/>)}
        </ul>
        <div className={classes.dialogs__messages}>
          {props.messages.map(message => <Message key={message.id} {...message}/>)}
        </div>
      </div>
    </div>
  )
};

export default Dialogs;
