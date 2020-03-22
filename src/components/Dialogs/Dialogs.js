import React from 'react';
import classes from './Dialogs.module.scss';
import DialogItem from './DialogItem';
import Message from './Message/Message';


const users = [
  { name: 'Андрей', id: 2},
  { name: 'Василий', id: 3},
  { name: 'Маша', id: 4},
  { name: 'Юрий', id: 5}
];


const messages = [
  {id: 1, message: 'test message'},
  {id: 2, message: 'test message2'},
  {id: 3, message: 'test message3'},
  {id: 4, message: 'test message4'}
];

const Dialogs = props => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs__title}>Dialogs</div>
      <div className={classes.dialogs__wrapper}>
        <ul className={classes.dialog__users}>
          {users.map(user => <DialogItem key={user.name} {...user}/>)}
        </ul>
        <div className={classes.dialogs__messages}>
          {messages.map(message => <Message key={message.id} {...message}/>)}
        </div>
      </div>
    </div>
  )
};

export default Dialogs;
