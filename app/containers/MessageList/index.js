import React from 'react';
import { compose } from 'redux';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import makeSelectMessages from './selectors';

class MessageList extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
    );
  }
};



export default compose(makeSelectMessages)(MessageList)
