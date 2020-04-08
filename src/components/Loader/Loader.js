import React from 'react';
import './Loader.scss';
import loader from '../../image/loader.gif';

const Loader = props => {
  return (
      <div className="loader">
        <img src={loader} alt=""/>
      </div>
  )
};

export default Loader;
