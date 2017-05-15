import MainReducer from '../../src/pages/Main/reducks/main.reducer';

test('Main Reducer: initialstate', () => {
  const initialState = {
    initialized: false
  }

  expect(MainReducer(initialState, {type: null})).toBe(initialState)
});