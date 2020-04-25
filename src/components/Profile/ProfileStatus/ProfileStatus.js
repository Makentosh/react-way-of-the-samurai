import React, {useState} from 'react';
import './ProfileStatus.scss';

const ProfileStatus = (props) => {

  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  const activateMode  = () => {
    setEditMode(true)
  };

  const deactivateMode = () => {
    setEditMode(false);
    props.updateStatus(status)
    console.log('status')
  };

  const onStatusChange = (e) => {
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
