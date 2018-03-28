import { fromJS } from 'immutable';

import makeSelectMessages from '../selectors';

describe('selectMessages', () => {
  it('makeSelectMessages should be a function', () => {
    expect(typeof makeSelectMessages).toEqual('function');
  });
  it('should select the message state', () => {
    const messageSelector = makeSelectMessages();
    const messages = fromJS([]);
    const mockedState = fromJS({
      messageList: {
        messages,
      },
    });
    const result = messageSelector(mockedState);
    expect(result).toEqual(messages);
  });
});
