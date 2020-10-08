import usersReducer, {actions, initialStateType} from './usersReducer';



let state: initialStateType;

beforeEach(() => {
  state = {
    users: [
      {id: 0, name: 'Петр', status: 'статус', followed: false, photos: {small: 'gfhdfghfg', large: 'dfghsdfg'}, location: 'город'},
      {id: 1, name: 'Петр1', status: 'статус', followed: true, photos: {small: 'dfgdf', large: 'sdgfdfg'}, location: 'город'},
      {id: 2, name: 'Петр1', status: 'статус', followed: false, photos: {small: 'dfgdf', large: 'sdgfdfg'}, location: 'город'},
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
  }
});


test('follow success', () => {

    const newState = usersReducer(state, actions.followSuccess(2));


    expect(newState.users[0].followed).toBeFalsy();
    expect(newState.users[2].followed).toBeTruthy();
});


test('unfollow success', () => {

  const newState = usersReducer(state, actions.unfollowSuccess(1));


  expect(newState.users[0].followed).toBeFalsy();
  expect(newState.users[1].followed).toBeFalsy();
});
