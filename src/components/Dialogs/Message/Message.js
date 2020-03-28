import React from 'react';
import classes from './Message.module.scss'

const Message = props => {

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
