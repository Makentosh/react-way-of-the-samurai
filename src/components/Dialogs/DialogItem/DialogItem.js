import React from 'react';
import classes from './DialogItem.module.scss';
import {NavLink} from 'react-router-dom';

const DialogItem = ({name, id, avatar}) => {
  return (
    <li className={classes.user}>
      <div className={classes.user__inner}>
        <div className={classes.user__avatar}>
          <img src={avatar} alt=""/>
        </div>
        <NavLink to={`/dialogs/${id}`} exact className={classes.user__link}>{name}</NavLink>
      </div>

    </li>
  )
};

export default DialogItem;