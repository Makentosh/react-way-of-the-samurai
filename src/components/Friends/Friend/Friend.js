import classes from '../Friends.module.scss';
import React from 'react';

const Friend = ({avatar, name}) => {
  return (
      <li className={classes.friendsList__item}>
        <div className={classes.friend}>
          <div className={classes.friend__avatar}>
            <img src={avatar} alt=""/>
          </div>
          <div className={classes.friend__name}>{name}</div>
        </div>
      </li>
  )
};

export default Friend;
