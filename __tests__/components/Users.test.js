// __tests__/Intro-test.js
import 'react-native';
import React from 'react';
import Users from '../../src/components/Home/Users';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <Users
      users={
        [
          {id: 1, name: 'Test 1', following: true},
          {id: 2, name: 'Test 2', following: false},
          {id: 3, name: 'Test 3', following: true}
        ]
      }

    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});