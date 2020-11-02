import {InferActionsTypes} from "./reduxStore";


type DialogType = {
  id: number
  name: string
  avatar: string
}

type MessagesType = {
  id: number
  avatar: string
  message: string
  author: boolean
}


let initialState = {
  // dialogs: [
  //   { name: 'Андрей', id: 22, avatar: 'https://photocasa.ru/uploads/posts/2015-10/1444685949_dsc08577.jpg'},
  //   { name: 'Василий', id: 33, avatar: 'https://photocasa.ru/uploads/posts/2015-10/1444685949_dsc08577.jpg'},
  //   { name: 'Маша', id: 44, avatar: 'https://photocasa.ru/uploads/posts/2015-10/1444685949_dsc08577.jpg'},
  //   { name: 'Юрий', id: 55, avatar: 'https://photocasa.ru/uploads/posts/2015-10/1444685949_dsc08577.jpg'}
  // ] as Array<DialogType>,
  // messages: [
  //   {id: 1, message: 'test message', author: true, avatar: 'https://whatsism.com/uploads/posts/2018-05/thumbs/1525374264_7f85e7b.jpeg'},
  //   {id: 2, message: 'test message2', author: false, avatar: 'https://greatchat.ru/wp-content/uploads/2018/07/menyaem-avatar-v-telegramm1.jpg'},
  //   {id: 3, message: 'test message3', author: true, avatar: 'https://whatsism.com/uploads/posts/2018-05/thumbs/1525374264_7f85e7b.jpeg'},
  //   {id: 4, message: 'test dfgvadavdgf', author: false, avatar: 'https://greatchat.ru/wp-content/uploads/2018/07/menyaem-avatar-v-telegramm1.jpg'},
  //   {id: 5, message: 'test avgavd', author: false, avatar: 'https://greatchat.ru/wp-content/uploads/2018/07/menyaem-avatar-v-telegramm1.jpg'},
  //   {id: 6, message: 'test message4', author: false, avatar: 'https://greatchat.ru/wp-content/uploads/2018/07/menyaem-avatar-v-telegramm1.jpg'},
  //   {id: 7, message: 'test avsdfvasd', author: true, avatar: 'https://whatsism.com/uploads/posts/2018-05/thumbs/1525374264_7f85e7b.jpeg'},
  //   {id: 8, message: 'tesavsdft mevasdfvsssage4', author: true, avatar: 'https://whatsism.com/uploads/posts/2018-05/thumbs/1525374264_7f85e7b.jpeg'},
  //   {id: 9, message: 'tesavsdft vasdfv', author: false, avatar: 'https://greatchat.ru/wp-content/uploads/2018/07/menyaem-avatar-v-telegramm1.jpg'},
  //   {id: 10, message: 'tesasvdft message4', author: true, avatar: 'https://whatsism.com/uploads/posts/2018-05/thumbs/1525374264_7f85e7b.jpeg'},
  // ] as Array<MessagesType>
};




const messageReducer = (state = initialState, action: ActionsType): initialStateType => {

  switch (action.type) {
    case 'ADD_MESSAGE':

      // let message = {
      //   id: state.messages[state.messages.length - 1].id + 1,
      //   message: action.newMessage,
      //   author: true,
      //   avatar: 'https://whatsism.com/uploads/posts/2018-05/thumbs/1525374264_7f85e7b.jpeg'
      // };

      return {
        ...state,
        // messages: [...state.messages, message ],
      };


    default:
      return state;
  }
};


export const actions = {
  addMessageDialogsCreator: (newMessage: string) => ({type: 'ADD_MESSAGE', newMessage} as const)
};

export default messageReducer;


export type initialStateType = typeof initialState

type ActionsType = InferActionsTypes<typeof actions>
