import * as homeModel from './home.model'

export default (state = homeModel.initialState, action) => {
  switch (action.type) {
    case homeModel.GET_USERS:
      return {
        users: action.payload.reduce((acc, user) => ({ ...acc, [user.id]: user }), {})
      }
    case homeModel.FOLLOW_USER:
      return {
        users: {
          ...state.users,
          [action.payload.userId]: {
            ...state.users[action.payload.userId],
            following: true
          }
        }
      }
    case homeModel.UNFOLLOW_USER:
      return {
        users: {
          ...state.users,
          [action.payload.userId]: {
            ...state.users[action.payload.userId],
            following: false
          }
        }
      }
    default:
      return state;
  }
}
