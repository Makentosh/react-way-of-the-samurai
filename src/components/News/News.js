import React from 'react';
import classes from './News.module.scss';
import {withAuthRedirect} from '../../hoc/WithAuthRedirect';
import {withRouter} from 'react-router';

const News = props => {
  return (
    <div className={classes.news}>
      <div>
        NEWS
      </div>
    </div>
  )
};

export default withAuthRedirect(withRouter(News));
