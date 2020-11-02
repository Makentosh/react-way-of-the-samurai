import React, {FC} from 'react';
import classes from './Message.module.scss'

type PropsType = {
    avatar: string
    senderName: string
    body: string
}

const Message: FC<PropsType> = ({senderName, avatar,body, ...props}) => {

  return (
    <div className={`${classes.message} ${senderName ? classes.message__author : ''}`}>
      <div className={classes.message__inner}>
        <div className={classes.message__avatar}>
          <img src={avatar} alt=""/>
        </div>
        <div className={classes.message__text}>
          {body}
        </div>
      <div className={classes.message__name}>
          {senderName}
      </div>
      </div>
    </div>
  )
};


export default Message;
