import React from 'react';
import  './Music.scss';
// import {withAuthRedirect} from '../../hoc/WithAuthRedirect';
import {withRouter} from 'react-router';

const Music = props => {


  let inputFiles = [];

  let sendFile = (e) => {
    let output = document.querySelector('.output');
    let input = e.target;

    inputFiles = [...input.files];

    console.log(inputFiles)

    for(let f = 0; f < inputFiles.length; f++) {

      let reader = new FileReader();

      reader.onload = () => {

        let resultSrc = reader.result;

        let img = `
          <div class="thumbnail-wrap">
          <button type="button" class="thumbnail-delete">
            x
           </button>
            <img class="thumbnail" src="${resultSrc}">
          </div>
        `;

        output.insertAdjacentHTML('afterbegin', img);

        let removeBtn = document.querySelector('.thumbnail-delete');
        removeBtn.addEventListener('click', (e) => {
          inputFiles = inputFiles.splice(input.files[f], 1)
          console.log(inputFiles)
        })
      };


      reader.readAsDataURL(input.files[f]);

    }


  };



  return (
    <div className="music">
      Music

      <div className="dropzone">
        <div className="dropzone__text">
          Перетягніть файл сюди
        </div>
        <input type="file"
               className="field"
               accept="image/*"
               multiple
               onChange={sendFile}/>
      </div>

      <div className="output">

      </div>

    </div>
  )
};

export default withRouter(Music);
