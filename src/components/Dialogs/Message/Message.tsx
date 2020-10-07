import React, {FC} from 'react';
import classes from './Message.module.scss'

type PropsType = {
    message: string
    avatar: string
    author: boolean
}

const Message: FC<PropsType> = ({...props}) => {

  return (
    <div className={`${classes.message} ${props.author ? classes.message__author : ''}`}>
      <div className={classes.message__inner}>
        <div className={classes.message__avatar}>
          <img src={props.avatar} alt=""/>
        </div>
        <div className={classes.message__text}>
          {props.message}
        </div>
      </div>
    </div>
  )
};


export default Message;
