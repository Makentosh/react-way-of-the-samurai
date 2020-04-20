import React from 'react';
import './PostForm.scss';
import {Field, reduxForm} from 'redux-form';
import {requiredField, maxLengthCreator} from '../../../utils/validators/validators';
import {Textarea} from '../../common/FormsControls/FormsControls';

let maxLength10 = maxLengthCreator(10);

const PostForm = (props) => {
  return (
      <div className="posts__form-wrap">
        <form onSubmit={props.handleSubmit} className="posts__form">
          <Field component={Textarea}
                 name="newPostMessage"
                 className="posts__field"
                 placeholder="Your news..."
                 validate={[requiredField, maxLength10]}
          />

          <button type="submit"
                  className="posts__btn">
            Send Post
          </button>
        </form>
      </div>
  )
};

export default reduxForm({form: 'sendPostsForm'})(PostForm);
