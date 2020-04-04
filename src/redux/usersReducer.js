const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
  users: [
    {id: 1, followed: false, photoUrl: 'https://99px.ru/sstorage/1/2011/06/image_11406111707363332889.jpg', fullName: 'Igor A.', status: 'i am boss', location: { city: 'Minsk', country: 'Belarus'}},
    {id: 2, followed: true,  photoUrl: 'https://99px.ru/sstorage/1/2011/06/image_11406111707363332889.jpg', fullName: 'Petr T.', status: 'lorem 3545d dfg', location: { city: 'Kiev', country: 'Ukraine'}},
    {id: 3, followed: false,  photoUrl: 'https://99px.ru/sstorage/1/2011/06/image_11406111707363332889.jpg', fullName: 'Ivan N.', status: 'lorem ipsun 2454', location: { city: 'Warzshawa', country: 'Poland'}},
    {id: 4, followed: true,  photoUrl: 'https://99px.ru/sstorage/1/2011/06/image_11406111707363332889.jpg', fullName: 'Jack T.', status: 'lorem ipsun ', location: { city: 'Rym', country: 'Italy'}},
  ]
};

const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: true}
          }
          return user;
        })

      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: false}
          }
          return user;
        })

      };

    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users]
      };

    default:
      return state;
  }
};

export const follow = (userId) => ({
  type:  FOLLOW,
  userId
});

export const unfollow = (userId) => {
  return {
    type:  UNFOLLOW,
    userId
  }};

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users
  }
};

export default usersReducer;
