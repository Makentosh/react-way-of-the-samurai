import React from 'react';
import './MessageForm.scss';
import {Field, reduxForm} from 'redux-form';
import {maxLengthCreator, requiredField} from '../../../utils/validators/validators';
import {Textarea} from '../../common/FormsControls/FormsControls';

let maxLength100 = maxLengthCreator(100);

const MessageForm = props => {
  return (
      <form onSubmit={props.handleSubmit}>
        <Field component={Textarea}
               name="newMessageBody"
               className="dialogs__field"
               validate={[requiredField, maxLength100]}
               placeholder="Your message..."/>

        <button type="submit"
                className="dialogs__btn">
          Send
        </button>
      </form>
  )
};

export default reduxForm({form: 'dialogsMessageForm'})(MessageForm);
