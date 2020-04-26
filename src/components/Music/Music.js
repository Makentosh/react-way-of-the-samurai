import React from 'react';
import  './Music.scss';
// import {withAuthRedirect} from '../../hoc/WithAuthRedirect';
import {withRouter} from 'react-router';

const Music = props => {



  let uploadFiles = [];

  let sendFile = (e) => {
    let output = document.querySelector('.output');
    let input = e.target;


    for(let k = 0; k < input.files.length; k++) {
      uploadFiles.push({
        file: input.files[k],
        order: uploadFiles.length
      });
      console.log(uploadFiles, 'upload filex')
    }



    for(let f = 0; f < uploadFiles.length; f++) {

      let reader = new FileReader();

      reader.onload = () => {

        let resultSrc = reader.result;

        let img = `
          <div class="thumbnail-wrap">
          <button type="button" class="thumbnail-delete" data-order="${uploadFiles[f].order}">
            x
           </button>
            <img class="thumbnail" src="${resultSrc}">
          </div>
        `;

        output.insertAdjacentHTML('afterbegin', img);

        let removeBtn = document.querySelector('.thumbnail-delete');

        removeBtn.addEventListener('click', (e) => {
          let currentItem = parseInt(e.currentTarget.getAttribute('data-order'));

          uploadFiles = uploadFiles.splice(currentItem, 1);
          console.log(uploadFiles)
          // console.log(e.currentTarget.getAttribute('data-order'))
          // console.log(uploadFiles[f])
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
