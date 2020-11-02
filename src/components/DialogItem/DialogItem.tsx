import React, {FC} from 'react';
import classes from './DialogItem.module.scss';
import {PhotosType} from '../../types/types';

type PropsType = {
    userName: string
    id: string | number
    photos: PhotosType
    handleOpenDialog: (id: string | number) => void
}

const DialogItem: FC<PropsType> = ({userName, id, photos, handleOpenDialog}) => {
  return (
    <li className={classes.user}
        onClick={() => handleOpenDialog(id)}>
      <div className={classes.user__inner}>
        <div className={classes.user__avatar}>
          <img src={photos?.large ? photos?.large : photos?.small} alt=""/>
        </div>
          {userName}
      </div>

    </li>
  )
};

export default DialogItem;
