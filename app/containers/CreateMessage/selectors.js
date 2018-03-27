import { createSelector } from 'reselect';

const selectCreateMessage = (state) => state.get('createMessage');

const makeSelectQuery = () => createSelector(
  selectCreateMessage,
  (createMessageState) => createMessageState.get('query')
);

export {
  makeSelectQuery,
};
