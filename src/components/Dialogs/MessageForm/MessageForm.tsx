import React from 'react';
import './MessageForm.scss';
import {InjectedFormProps, reduxForm} from 'redux-form';
import {maxLengthCreator, requiredField} from '../../../utils/validators/validators';
import {createField, Input} from '../../common/FormsControls/FormsControls';
import {NewMassageFormType} from "../Dialogs";

let maxLength100 = maxLengthCreator(100);

type TypeNewMessageFormKeysType = Extract<keyof NewMassageFormType, string>

type PropsType = {}

const MessageForm: React.FC<InjectedFormProps<NewMassageFormType, PropsType> & PropsType> = ({...props}) => {
  return (
      <form onSubmit={props.handleSubmit}>
          {createField<TypeNewMessageFormKeysType>('Your message...', 'newMessageBody', [requiredField, maxLength100], Input, {type: 'text'}) }


        <button type="submit"
                className="dialogs__btn">
          Send
        </button>
      </form>
  )
};

export default reduxForm<NewMassageFormType>({form: 'dialogsMessageForm'})(MessageForm);
