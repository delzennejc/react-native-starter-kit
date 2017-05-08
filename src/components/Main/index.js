import React, { Component } from 'react'
import { AppLoading } from 'expo'

class Main extends Component {

  componentWillMount() {
    const { initApplication } = this.props
    initApplication()
  }

  render() {
    if (!this.props.initialized) {
      return <AppLoading />
    }
    return this.props.children
  }
}

export default Main