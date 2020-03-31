const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_TEXT_MESSAGE = 'UPDATE-TEXT-MESSAGE';

const messageReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let message = {
        id: state.messages[state.messages.length - 1].id + 1,
        message: state.newDialogMessageText,
        author: true,
        avatar: 'https://whatsism.com/uploads/posts/2018-05/thumbs/1525374264_7f85e7b.jpeg'
      };

      state.messages.push(message);
      state.newDialogMessageText = '';
      return state;

    case UPDATE_TEXT_MESSAGE:
      state.newDialogMessageText = action.newMessage;
      return state;
    default:
      return state;
  }
};

export const addMessageDialogsCreator = () => ({type:  ADD_MESSAGE});

export const updateMessageText = (newMessage) => {
  return {
    type:  UPDATE_TEXT_MESSAGE,
    newMessage: newMessage
  }
};

export default messageReducer;
