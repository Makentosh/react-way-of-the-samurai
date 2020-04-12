import React from 'react';
import  './Music.scss';

const Music = props => {

  let sendFile = (e) => {
    let output = document.querySelector('.output');
    let input = e.target;


    for(let f = 0; f < input.files.length; f++) {

      let reader = new FileReader();

      reader.onload = () => {

        let resultSrc = reader.result;

        let img = document.createElement('img'),
            div = document.createElement('div');

            div.classList.add('thumbnail-wrap');
            img.classList.add('thumbnail');
            img.setAttribute('src', resultSrc);


        div.insertAdjacentElement('afterbegin', img);
        output.insertAdjacentElement('afterbegin', div)
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

export default Music;
