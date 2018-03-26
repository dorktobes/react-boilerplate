import { fromJS } from 'immutable';
import {
  LOAD_MESSAGES,
  LOAD_MESSAGES_SUCCESS,
  LOAD_MESSAGES_ERROR,
} from './constants';

const initialState = fromJS({
  messages: [],
  loading: false,
  error: false,
});

function messageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_MESSAGES:
      return state
        .set('loading', true)
        .set('error', false);
    case LOAD_MESSAGES_SUCCESS:
      return state
      .set('messages', action.value)
      .set('loading', false);
    case LOAD_MESSAGES_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error);
    default:
      return state;
  }
}

export default messageReducer;
