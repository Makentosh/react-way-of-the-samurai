import React from 'react';
import  './Music.scss';
import {withRouter} from 'react-router';

const Music = (props)  => {


  // let [uploadFiles, setUploadFiles] = useState([]);


    return (
        <div className="music">
          Music

          <div className="dropzone">
            <div className="dropzone__text">
              Перетягніть файл сюди
            </div>
            {/*<input type="file"*/}
            {/*       className="field"*/}
            {/*       accept="image/*"*/}
            {/*       multiple*/}
            {/*       onChange={}/>*/}
          </div>

        </div>
    )
};

export default withRouter(Music);
