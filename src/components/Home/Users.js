import React from 'react';
import { Text, ScrollView, View, Button, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import ListItems from '../../components/commons/ListItems'

const Users = ({ users, followUser, unfollowUser }) => (
  <ScrollView
    style={{
      flex: 1
    }}
    contentContainerStyle={{ flex: 1 }}
  >
    {Object.values(users).map(({ id, name, following }) => (
      <ListItems key={`user-${id}`}>
        <Text>{name}</Text>
        <Button
          color={"tomato"}
          onPress={() => following ? unfollowUser(id) : followUser(id)}
          title={following ? 'Unfollow' : 'Follow'}
        />  
      </ListItems>
    ))}
  </ScrollView>
)

export default Users;
