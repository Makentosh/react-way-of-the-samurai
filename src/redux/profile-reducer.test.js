import profileReducer, {deletePost} from './profileReducer';


let initialState = {
  posts: [
    {id: 10,  message: 'post message', likeCount: 25},
    {id: 20,  message: 'post message',  likeCount: 32},
    {id: 30,  message: 'post message',  likeCount: 78},
    {id: 45,  message: 'post message',  likeCount: 15}
  ]
};


test('length of messeges decrement', () => {
  let action = deletePost(10);

  let newState  = profileReducer(initialState, action);

  expect(newState.posts.length).toBe(3);
});
