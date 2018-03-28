import React from 'react';
import { shallow } from 'enzyme';

import { MessageList } from '../index';
import Li from '../Li';

describe('<MessageList />', () => {
  it('should call loadMessages() when mounted', () => {
    const loadMessagesSpy = jest.fn();
    shallow(<MessageList loadMessages={loadMessagesSpy} />);
    expect(loadMessagesSpy).toHaveBeenCalled();
  });
  it('should not contain any <Li>\'s if there are no messages', () => {
    const loadMessagesSpy = jest.fn();
    const shallowRender = shallow(<MessageList loadMessages={loadMessagesSpy} messages={[]} />);
    expect(shallowRender.contains(<Li />)).toEqual(false);
  });
  it('should render one <Li> per message', () => {
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
    expect(shallowRender.find(Li).length).toEqual(2);
  });
});
