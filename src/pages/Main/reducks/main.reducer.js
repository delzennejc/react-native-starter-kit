import * as mainModel from './main.model'

const main = (state = mainModel.initialState, action) => {
  switch(action.type) {
    case mainModel.APP_INITIALIZED:
      return {
        ...state,
        initialized: true
      }
    default:
      return state
  }
}

export default main