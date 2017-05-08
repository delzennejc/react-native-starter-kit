import * as mainModel from './main.model'

export const initApplication = () => {
  return ({
    type: mainModel.INIT_APPLICATION
  })
}