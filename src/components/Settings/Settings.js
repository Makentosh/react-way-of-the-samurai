import React from 'react';
import classes from './Settings.module.scss';
import {withAuthRedirect} from '../../hoc/WithAuthRedirect';
import {withRouter} from 'react-router';

const Settigns = props => {
  return (
    <div className={classes.settings}>
      Settings
    </div>
  )
};

export default withAuthRedirect(withRouter(Settigns));
