import React, {useEffect, useState} from 'react';
import './ProfileStatus.scss';


const ProfileStatus = (props: any) => {

  let [editMode, setEditMode] = useState<boolean>(false);
  let [status, setStatus] = useState<string>(props.status);

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

  const onStatusChange = (e:any) => {
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
