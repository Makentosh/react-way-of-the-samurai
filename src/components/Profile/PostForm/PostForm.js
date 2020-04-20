import React from 'react';
import './PostForm.scss';
import {Field, reduxForm} from 'redux-form';

const PostForm = (props) => {
  return (
      <div className="posts__form-wrap">
        <form onSubmit={props.handleSubmit} className="posts__form">
          <Field component="textarea"
                 name="newPostMessage"
                 className="posts__field"
                 placeholder="Your news..."/>

          <button type="submit"
                  className="posts__btn">
            Send Post
          </button>
        </form>
      </div>
  )
};

export default reduxForm({form: 'sendPostsForm'})(PostForm);
