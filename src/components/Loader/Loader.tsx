import React, {FC} from 'react';
import './Loader.scss';
import loader from '../../image/loader.gif';

type PropsTypes = {}

const Loader: FC<PropsTypes> = ({...props}) => {
  return (
      <div className="loader">
        <img src={loader} alt=""/>
      </div>
  )
};

export default Loader;
