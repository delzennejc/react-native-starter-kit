import React, { Component } from 'react'
import styled from 'styled-components/native'

import Screen from '../../components/commons/Screen'

import Users from './Users'

class Home extends Component {
  render() {
    const { users, followUser, unfollowUser } = this.props
    return (
      <Screen>
        <Users
          users={users}
          followUser={followUser}
          unfollowUser={unfollowUser}
        />
      </Screen>
    )
  }
}

export default Home
