import React from 'react';
import classes from './Friends.module.scss';
import Friend from './Friend';
import {connect} from 'react-redux';



const Friends = (props) => {
  return (
    <div className={classes.friends}>
        <div className={classes.friends__title}>Friends</div>
        <ul className={classes.friendsList}>
          {props.sideBar.friends.map(frined => <Friend key={frined.id} {...frined}/>)}
        </ul>
      </div>
  )
};

let mapStateToProps = (state) => {
  return {
    sideBar: state.sideBar
  }
};


export default connect(mapStateToProps)(Friends);
