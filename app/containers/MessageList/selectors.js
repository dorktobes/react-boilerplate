import { createSelector } from 'reselect';

const selectRoute = (state) => state.get('route');

const getMessages = (state) => {
  console.log(state);
  return state.messages;
};

const makeSelectMessages = () => createSelector(
  getMessages,
  (messages) => messages
);

export default  makeSelectMessages;
