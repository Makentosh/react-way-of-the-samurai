import React from 'react';
import classes from './DialogItem.module.scss';
import {NavLink} from 'react-router-dom';

const DialogItem = ({name, id}) => {
  return (
    <li className={classes.user}>
      <NavLink to={`/dialogs/${id}`} exact className={classes.user__link}>{name}</NavLink>
    </li>
  )
};

export default DialogItem;
