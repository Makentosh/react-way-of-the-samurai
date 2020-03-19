import React from "react";
import classes from './Dialogs.module.scss';

const Dialogs = props => {
  return (
    <div>
      <div className={classes.dialogs}>Dialogs</div>
      <div>
        <div>let column</div>
        <div>right column</div>
      </div>
    </div>
  )
};

export default Dialogs;
