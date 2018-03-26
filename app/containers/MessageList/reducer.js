import { fromJS } from 'immutable';
import { LOAD_MESSAGES } from './constants';

const initialState = fromJS({
  messages: [],
});

function messageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_MESSAGES:
      return state
        .set('messages', action.value);
    default:
      return state;
  }
}

export default messageReducer;