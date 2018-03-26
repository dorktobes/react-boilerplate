import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import makeSelectMessages from './selectors';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import getMessages from './actions';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';

class MessageList extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log('component will mount', this.props.messages, !!this.props.messages);
    if(!this.props.messages.length) {
      this.props.getMessages();
    }
  }

  renderMessages() {
    if (this.props.messages) {
      return this.props.messages.map(message => <li key={message._id}>{message.body}</li>);
    } else {
      return <h5>There are no messages yet :-(</h5>
    }
  }
  render() {
    return (
      <div>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <ul>
          {this.renderMessages()}
        </ul>
      </div>
    );
  }
};

export function mapDispatchToProps(dispatch) {
  return {
    getMessages: () => dispatch(getMessages()),
  };
}

const mapStateToProps = createStructuredSelector({
  messages: makeSelectMessages(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'messageList', reducer });
const withSaga = injectSaga({ key: 'messageList', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(MessageList);
