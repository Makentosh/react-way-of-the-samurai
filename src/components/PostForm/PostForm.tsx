import React from 'react';
import './PostForm.scss';
import {InjectedFormProps, reduxForm} from 'redux-form';
import {requiredField, maxLengthCreator} from '../../utils/validators/validators';
import {createField, GetStringKeys, Textarea} from '../common/FormsControls/FormsControls';

let maxLength100 = maxLengthCreator(100);

type PropsType = {
    handleSubmit: () => void
}

export type AddPostFormType = {
    newPostMessage: string
}

type AddPostFormTypeKeys = GetStringKeys<AddPostFormType>

const PostForm: React.FC<InjectedFormProps<AddPostFormType, PropsType> & PropsType> = (props) => {
  return (
      <div className="posts__form-wrap">
        <form onSubmit={props.handleSubmit} className="posts__form">
            {createField<AddPostFormTypeKeys>('Your post', 'newPostMessage', [requiredField, maxLength100], Textarea, {type: 'text'}) }

          <button type="submit"
                  className="posts__btn">
            Send Post
          </button>
        </form>
      </div>
  )
};

export default reduxForm<AddPostFormType, PropsType>({form: 'sendPostsForm'})(PostForm);
