import { fromJS } from 'immutable';

import {
  UPDATE_QUERY,
  POST_MESSAGE_SUCCESS,
} from './constants';

const initialState = fromJS({
  query: '',
});

const createMessageReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_QUERY:
      return state.set('query', action.query);
    case POST_MESSAGE_SUCCESS:
      return state
      .set('query', '')
      .setIn(['location', 'pathname'], '/');
    default:
      return state;
  }
};

export default createMessageReducer;
