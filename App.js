import React, { Component } from 'react'
import { NativeRouter } from 'react-router-native';
import { Provider } from 'react-redux'

// all routes
import Routes from './src/routes'

// store redux
import store from './src/store'

// history
import { history } from './src/store'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NativeRouter>
          <Routes />
        </NativeRouter>
      </Provider>
    );
  }
}
