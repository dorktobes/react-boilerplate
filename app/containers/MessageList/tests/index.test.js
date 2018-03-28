import React from 'react';
import { shallow } from 'enzyme';

import { MessageList } from '../index';

describe('<MessageList />', () => {
  it('should call loadMessages() when mounted', () => {
    const loadMessagesSpy = jest.fn();
    shallow(<MessageList loadMessages={loadMessagesSpy} />);
    expect(loadMessagesSpy).toHaveBeenCalled();
  });
  it('should not contain any <li>\'s if there are no messages', () => {
    const loadMessagesSpy = jest.fn();
    const shallowRender = shallow(<MessageList loadMessages={loadMessagesSpy} messages={[]} />);
    expect(shallowRender.find('li').length).toEqual(0);
  });
  it('should render one <li> per message', () => {
    const loadMessagesSpy = jest.fn();
    const messages = [
      {
        _id: 1,
        body: test,
      },
      {
        _id: 2,
        body: test,
      },
    ];
    const shallowRender = shallow(<MessageList loadMessages={loadMessagesSpy} messages={messages} />);
    expect(shallowRender.find('li').length).toEqual(2);
  });
});
