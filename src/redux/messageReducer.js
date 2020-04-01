const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_TEXT_MESSAGE = 'UPDATE-TEXT-MESSAGE';

let initialState = {
  dialogs: [
    { name: 'Андрей', id: 22, avatar: 'https://photocasa.ru/uploads/posts/2015-10/1444685949_dsc08577.jpg'},
    { name: 'Василий', id: 33, avatar: 'https://photocasa.ru/uploads/posts/2015-10/1444685949_dsc08577.jpg'},
    { name: 'Маша', id: 44, avatar: 'https://photocasa.ru/uploads/posts/2015-10/1444685949_dsc08577.jpg'},
    { name: 'Юрий', id: 55, avatar: 'https://photocasa.ru/uploads/posts/2015-10/1444685949_dsc08577.jpg'}
  ],
  messages: [
    {id: 1, message: 'test message', author: true, avatar: 'https://whatsism.com/uploads/posts/2018-05/thumbs/1525374264_7f85e7b.jpeg'},
    {id: 2, message: 'test message2', author: false, avatar: 'https://greatchat.ru/wp-content/uploads/2018/07/menyaem-avatar-v-telegramm1.jpg'},
    {id: 3, message: 'test message3', author: true, avatar: 'https://whatsism.com/uploads/posts/2018-05/thumbs/1525374264_7f85e7b.jpeg'},
    {id: 4, message: 'test dfgvadavdgf', author: false, avatar: 'https://greatchat.ru/wp-content/uploads/2018/07/menyaem-avatar-v-telegramm1.jpg'},
    {id: 5, message: 'test avgavd', author: false, avatar: 'https://greatchat.ru/wp-content/uploads/2018/07/menyaem-avatar-v-telegramm1.jpg'},
    {id: 6, message: 'test message4', author: false, avatar: 'https://greatchat.ru/wp-content/uploads/2018/07/menyaem-avatar-v-telegramm1.jpg'},
    {id: 7, message: 'test avsdfvasd', author: true, avatar: 'https://whatsism.com/uploads/posts/2018-05/thumbs/1525374264_7f85e7b.jpeg'},
    {id: 8, message: 'tesavsdft mevasdfvsssage4', author: true, avatar: 'https://whatsism.com/uploads/posts/2018-05/thumbs/1525374264_7f85e7b.jpeg'},
    {id: 9, message: 'tesavsdft vasdfv', author: false, avatar: 'https://greatchat.ru/wp-content/uploads/2018/07/menyaem-avatar-v-telegramm1.jpg'},
    {id: 10, message: 'tesasvdft message4', author: true, avatar: 'https://whatsism.com/uploads/posts/2018-05/thumbs/1525374264_7f85e7b.jpeg'},
  ],
  newDialogMessageText: ''
};

const messageReducer = (state = initialState, action) => {
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

export const addMessageDialogsCreator = () => ({
  type:  ADD_MESSAGE
});

export const updateMessageText = (newMessage) => {
  return {
    type:  UPDATE_TEXT_MESSAGE,
    newMessage: newMessage
  }
};

export default messageReducer;
