import React from 'react';
import  classes from './Music.module.scss';

const Music = props => {



  let sendFile = (e) => {
    let input = e.target;
    let fileReader = new FileReader();

    fileReader.onload = () => {
      // let dataURL = fileReader.result;
      console.log()
    };

    console.log(fileReader)

    fileReader.readAsDataURL(input.files[0])
  };

  return (
    <div className={classes.music}>
      Music
      <input type="file" accept="image/*" multiple  onChange={sendFile}/>
    </div>
  )
};

export default Music;
