import React from 'react';
import classes from './Friends.module.scss';
import Friend from './Friend';
import StoreContext from '../../StoreContext';


const Friends = (props) => {
  return (
      <StoreContext.Consumer>
        { (store) => {
          let state = store.getState();

          return <div className={classes.friends}>
                    <div className={classes.friends__title}>Friends</div>
                    <ul className={classes.friendsList}>
                      {state.sideBar.friends.map(frined => <Friend key={frined.id} {...frined}/>)}
                    </ul>
                  </div>
        }}
      </StoreContext.Consumer>

  )
};

export default Friends;
