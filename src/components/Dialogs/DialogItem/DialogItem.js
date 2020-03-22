import React from 'react';
import classes from './DialogItem.module.scss';
import {NavLink} from 'react-router-dom';

const DialogItem = ({name, id}) => {
  return (
    <li className={classes.dialogs__user}>
      <NavLink to={`/dialogs/${id}`} exact className={classes.dialog}>{name}</NavLink>
    </li>
  )
};

export default DialogItem;
