import {renderEntireTree} from '../render';

const state = {
  profilePage: {
    posts: [
      {id: 1,  message: 'post message', likeCount: 25},
      {id: 2,  message: 'post message',  likeCount: 32},
      {id: 3,  message: 'post message',  likeCount: 78},
      {id: 4,  message: 'post message',  likeCount: 15}
    ]
  },

  messagePage: {
    dialogs: [
      { name: 'Андрей', id: 2, avatar: 'https://photocasa.ru/uploads/posts/2015-10/1444685949_dsc08577.jpg'},
      { name: 'Василий', id: 3, avatar: 'https://photocasa.ru/uploads/posts/2015-10/1444685949_dsc08577.jpg'},
      { name: 'Маша', id: 4, avatar: 'https://photocasa.ru/uploads/posts/2015-10/1444685949_dsc08577.jpg'},
      { name: 'Юрий', id: 5, avatar: 'https://photocasa.ru/uploads/posts/2015-10/1444685949_dsc08577.jpg'}
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
  },

  friends: [
    {id: 1, name: 'Света', avatar: 'https://blznav.akamaized.net/img/games/cards/card-world-of-warcraft-54576e6364584e35.jpg'},
    {id: 2, name: 'Петро', avatar: 'https://blznav.akamaized.net/img/games/cards/card-world-of-warcraft-54576e6364584e35.jpg'},
    {id: 3, name: 'Иван', avatar: 'https://blznav.akamaized.net/img/games/cards/card-world-of-warcraft-54576e6364584e35.jpg'}
  ]
};

export let addPost = (newPost) => {
  let post = {
    id: Math.floor(Math.random() * 88),
    message: newPost,
    likeCount: 12
  };

  state.profilePage.posts.unshift(post)
  renderEntireTree(state);
  console.log(state)
};

export default state;
