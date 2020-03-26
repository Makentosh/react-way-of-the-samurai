const state = {
  profilePage: {
    posts: [
      {id: 1, title: 'post name', message: 'post message', likeCount: 25},
      {id: 2, title: 'post name', message: 'post message',  likeCount: 32},
      {id: 3, title: 'post name', message: 'post message',  likeCount: 78},
      {id: 4, title: 'post name', message: 'post message',  likeCount: 15}
    ]
  },

  messagePage: {
    dialogs: [
      { name: 'Андрей', id: 2},
      { name: 'Василий', id: 3},
      { name: 'Маша', id: 4},
      { name: 'Юрий', id: 5}
    ],
    messages: [
      {id: 1, message: 'test message'},
      {id: 2, message: 'test message2'},
      {id: 3, message: 'test message3'},
      {id: 4, message: 'test message4'}
    ],
  },

  friends: [
    {id: 1, name: 'Света', avatar: 'https://blznav.akamaized.net/img/games/cards/card-world-of-warcraft-54576e6364584e35.jpg'},
    {id: 2, name: 'Петро', avatar: 'https://blznav.akamaized.net/img/games/cards/card-world-of-warcraft-54576e6364584e35.jpg'},
    {id: 3, name: 'Иван', avatar: 'https://blznav.akamaized.net/img/games/cards/card-world-of-warcraft-54576e6364584e35.jpg'}
  ]
};

export default state;
