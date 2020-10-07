import React, {FC} from 'react';
import classes from './Friends.module.scss';
import Friend from './Friend';
import {connect} from 'react-redux';
import {AppStateType} from "../../redux/reduxStore";


type MapPropsType = ReturnType<typeof mapStateToProps>

const Friends: FC<MapPropsType> = ({...props}) => {
  return (
    <div className={classes.friends}>
        <div className={classes.friends__title}>Friends</div>
        <ul className={classes.friendsList}>
          {props.friends.map(frined => <Friend key={frined.id} {...frined}/>)}
        </ul>
      </div>
  )
};

let mapStateToProps = (state: AppStateType) => {
  return {
    friends: state.sideBar.friends
  }
};


export default connect<MapPropsType, {}, {}, AppStateType>(mapStateToProps)(Friends);
