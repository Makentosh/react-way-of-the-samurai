import React from 'react';
import classes from './Friends.module.scss';
import Friend from './Friend';


const Friends = (props) => {
  return (
    <div className={classes.friends}>
      <div className={classes.friends__title}>Friends</div>
      <ul className={classes.friendsList}>
        {props.friends.map(frined => <Friend key={frined.id} {...frined}/>)}
      </ul>
    </div>
  )
};

export default Friends;
