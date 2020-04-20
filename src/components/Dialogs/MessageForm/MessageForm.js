import React from 'react';
import './MessageForm.scss';
import {Field, reduxForm} from 'redux-form';

const MessageForm = props => {
  return (
      <form onSubmit={props.handleSubmit}>
        <Field component="textarea"
               name="newMessageBody"
               className="dialogs__field"
               placeholder="Your message..."/>

        <button type="submit"
                className="dialogs__btn">
          Send
        </button>
      </form>
  )
};

export default reduxForm({form: 'dialogsMessageForm'})(MessageForm);
