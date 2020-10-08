import {actions, follow, unfollow} from './usersReducer';
import {usersAPI} from '../api/user-api';
import {APIResponseType, ResultCode} from '../api/auth-api';
jest.mock('../api/user-api');

const result: APIResponseType = {
    resultCode: ResultCode.Success,
    messages: [],
    data: {}
};


const userApiMock = usersAPI as jest.Mocked<typeof usersAPI>;

userApiMock.getFollow.mockReturnValue(Promise.resolve(result));
userApiMock.getUnfollow.mockReturnValue(Promise.resolve(result));


const dispatchMock = jest.fn();
const getStatMock = jest.fn();

beforeEach(() => {
    dispatchMock.mockClear();
    getStatMock.mockClear();
    userApiMock.getFollow.mockClear();
    userApiMock.getUnfollow.mockClear();
});

test('follow thunk', async () => {

    const thunk = follow(1);

    await thunk(dispatchMock, getStatMock, {});

    expect(dispatchMock).toBeCalledTimes(3);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleFollowing(true, 1));
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.followSuccess( 1));
    expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggleFollowing(false, 1));

});

test('unfollow thunk', async () => {

    const thunk = unfollow(1);

    await thunk(dispatchMock, getStatMock, {});

    expect(dispatchMock).toBeCalledTimes(3);
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleFollowing(true, 1));
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.unfollowSuccess( 1));
    expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggleFollowing(false, 1));

});

