import React, {FC, useEffect, useState} from 'react';
import './ProfileStatus.scss';

type PropsType = {
  status: string
  updateStatus: (status: string) => void
}

const ProfileStatus: FC<PropsType> = ({...props}) => {

  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect( () => {
    setStatus(props.status)
  }, [props.status]);

  const activateMode  = () => {
    setEditMode(true)
  };

  const deactivateMode = () => {
    setEditMode(false);
    props.updateStatus(status)
  };

  const onStatusChange = (e: any) => {
    setStatus(e.currentTarget.value)
  };

  return (
      <div>
        {
          !editMode
              ? <div>
                  <div>Статус</div>
                  <div onDoubleClick={activateMode}>{props.status || " установите статус"}</div>
                </div>
              : <div>
                  <input autoFocus={true}
                         onBlur={deactivateMode}
                         type="text"
                         onChange={onStatusChange}
                         value={status}/>
                </div>
        }

      </div>
  )

};

export default ProfileStatus;
