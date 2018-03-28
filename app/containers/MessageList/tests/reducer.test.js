import { fromJS } from 'immutable';

import messageReducer from '../reducer';
import {} from '../actions';

describe('homeReducer', () => {
  let state;
  const messages = fromJS([]);
  beforeEach(() => {
    state = fromJS({
      messages,
      loading: false,
      error: false,
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(messageReducer(undefined, {})).toEqual(expectedResult);
  });
});
