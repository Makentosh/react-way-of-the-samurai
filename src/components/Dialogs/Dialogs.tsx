import React, {ReactNode, useEffect, useState} from 'react';
import classes from './Dialogs.module.scss';
import DialogItem from '../DialogItem';
import Message from '../Message/Message';
import MessageForm from '../MessageForm';
import {initialStateType} from '../../redux/messageReducer';
import {getAllDialogs, getDialogsMessages, sendMessage} from '../../api/dialogs';


type OwnPropsType = {
    messagePage: initialStateType
    addMessageDialogsCreator: (newMessageBody: string) => void
    children: ReactNode
}

export type NewMassageFormType = {
    newMessageBody: string
}


const Dialogs: React.FC<OwnPropsType> = ({...props}) => {
    const [dialogs, setDialogs] = useState([])
    const [messages, setMessages] = useState([])
    const [currentUserId, setCurrentUserId] = useState([])


    useEffect(() => {
        getAllDialogs()
            .then(response => {
                // @ts-ignore
                setDialogs(response)
            })
    }, [])


    let handleOpenDialog = (id: number) => {
        getDialogsMessages(id)
            .then(messages => {
                //@ts-ignore
                setMessages(messages.items)
                // @ts-ignore
                setCurrentUserId(id)
            })
    }

    let fetchAllMessages = () => {
        //@ts-ignore
        getDialogsMessages(currentUserId)
            //@ts-ignore
            .then(messages => {
                //@ts-ignore
                setMessages(messages.items)
            })
    }

    let addNewMessage = (value: { newMessageBody: string }) => {
        //@ts-ignore
        sendMessage(currentUserId, {body: value.newMessageBody})
            //@ts-ignore
            .then(() => {
                fetchAllMessages()
            })
        // props.addMessageDialogsCreator(value.newMessageBody);
    };

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs__title}>Dialogs</div>
            <div className={classes.dialogs__wrapper}>
                <ul className={classes.dialogs__users}>
                    {dialogs.map((user, index) => <DialogItem key={index}
                                                              handleOpenDialog={handleOpenDialog}
                                                              {...user}/>)}
                </ul>
                <div className={classes.dialogs__messages}>

                    {messages &&
                        <div className={classes.dialogs__messagesWrap}>
                            {messages.map((message, index) => <Message key={index}
                                                                       {...message}/>)}
                        </div>
                    }



                    <div className={classes.dialogs__newMessage}>
                        <MessageForm onSubmit={addNewMessage}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;
