
type friendstype = {
  id: number
  name: string
  avatar: string
}

let initialState = {
  friends: [
    {id: 1, name: 'Света', avatar: 'https://blznav.akamaized.net/img/games/cards/card-world-of-warcraft-54576e6364584e35.jpg'},
    {id: 2, name: 'Петро', avatar: 'https://blznav.akamaized.net/img/games/cards/card-world-of-warcraft-54576e6364584e35.jpg'},
    {id: 3, name: 'Иван', avatar: 'https://blznav.akamaized.net/img/games/cards/card-world-of-warcraft-54576e6364584e35.jpg'}
  ] as Array<friendstype>
};

export type initialStateType = typeof initialState

const sideBarReducer = (state = initialState, action: any): initialStateType => {

  return state;
};

export default sideBarReducer;
