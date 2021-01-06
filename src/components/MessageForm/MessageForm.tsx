import React, {useState} from 'react';
import './MessageForm.scss';
import {InjectedFormProps} from 'redux-form';

type PropsType = {
    addNewMessage: (message: string) => void
}

const MessageForm: React.FC<InjectedFormProps<PropsType> & PropsType> = ({addNewMessage, ...props}) => {
    const [message, setMessage] = useState('')

    let handleSendMessage = () => {
        addNewMessage(message)
        setMessage('')
    }


    return (
        <>
            {/*{createField<TypeNewMessageFormKeysType>('Your message...', 'newMessageBody', [requiredField, maxLength100], Input, {type: 'text'}) }*/}
            <input type="text"
                   value={message}
                   onChange={e => setMessage(e.target.value)}
                   name="newMessageBody"/>

            <button type="submit"
                    onClick={handleSendMessage}
                    className="dialogs__btn">
                Send
            </button>
        </>
    )
};

export default MessageForm;
