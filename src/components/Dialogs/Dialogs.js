import React from 'react';
import classes from './Dialogs.module.scss';
import DialogItem from './DialogItem';
import Message from './Message/Message';


const Dialogs = props => {
  let newMessage = React.createRef();

  let addNewMessage = () => {
    props.addMessage();
  };

  let changeMessage = () => {
    let newTextMessage = newMessage.current.value;
    props.updateTextMessage(newTextMessage)

  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs__title}>Dialogs</div>
      <div className={classes.dialogs__wrapper}>
        <ul className={classes.dialogs__users}>
          {props.dialogs.map(user => <DialogItem key={user.name} {...user}/>)}
        </ul>
        <div className={classes.dialogs__messages}>
          <div className={classes.dialogs__messagesWrap}>
            {props.messages.map(message => <Message key={message.id} {...message}/>)}
          </div>
          <div className={classes.dialogs__newMessage}>
             <textarea className={classes.dialogs__field}
                       onChange={changeMessage}
                       ref={newMessage}
                       value={props.newDialogMessageText}
                       cols="10" rows="5"
                       placeholder="Your message..."/>
            <button type="button"
                    className={classes.dialogs__btn}
                    onClick={addNewMessage}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Dialogs;
