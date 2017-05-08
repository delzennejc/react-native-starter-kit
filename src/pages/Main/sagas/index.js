import { call, put, takeLatest, fork, all } from 'redux-saga/effects'
import * as mainModel from '../reducks/main.model'
import * as homeModel from '../../Home/reducks/home.model'
import { getUsers } from '../../../services/user.api'

function* initApp() {
  try {
    const res = yield call(getUsers)
    const users = res.data

    const newUsers = users.map(user => {
      return ({
        id: user.id,
        name: user.name,
        following: false
      })
    })
  
    yield put({
      type: homeModel.GET_USERS,
      payload: newUsers
    })

    yield put({
      type: mainModel.APP_INITIALIZED
    })
  } catch(e) {
    console.error(e)
    yield put({
      type: homeModel.GET_USERS,
      payload: []
    })
  }
}

export default function* rootMainSaga() {
  yield all([
    takeLatest(mainModel.INIT_APPLICATION, initApp)
  ])
}
