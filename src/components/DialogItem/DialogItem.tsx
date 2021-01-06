import React, {FC} from 'react';
import classes from './DialogItem.module.scss';
import {PhotosType} from '../../types/types';

type PropsType = {
    userName: string
    id: string | number
    active: any
    photos: PhotosType
    handleOpenDialog: (id: string | number) => void
}

const DialogItem: FC<PropsType> = ({active, userName, id, photos, handleOpenDialog}) => {
  return (
    <li className={`${classes.user} ${active ? classes.user__active : ''}`}
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
