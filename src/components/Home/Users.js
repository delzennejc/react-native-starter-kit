import React from 'react';
import { Text, ScrollView, View, Button, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { List, ListItem } from 'react-native-elements'


const Users = ({ users, followUser, unfollowUser }) => (
  <ScrollView
    style={{
      flex: 1
    }}
    contentContainerStyle={{ flex: 1 }}
  >
    {Object.values(users).map(({ id, name, following }) => (
      <ListItem
        title={name}
        key={`user-${id}`}
        rightIcon={
          <Button
            color={"tomato"}
            onPress={() => following ? unfollowUser(id) : followUser(id)}
            title={following ? 'Unfollow' : 'Follow'}
          /> 
        }
      />
    ))}
  </ScrollView>
)

export default Users;
