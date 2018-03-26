import { createSelector } from 'reselect';

const getMessages = (state) => {
  let messages = state.getIn(['messageList', 'messages']);
  return messages;
};

const makeSelectMessages = () => createSelector(
  getMessages,
  (messages) => messages
);

export default  makeSelectMessages;
