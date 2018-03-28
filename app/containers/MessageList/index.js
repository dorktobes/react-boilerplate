import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import H1 from './H1';
import Li from './Li';
import StyledLink from './StyledLink';
import messages from './messages';
import makeSelectMessages from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loadMessages } from './actions';


export class MessageList extends React.PureComponent {

  componentWillMount() {
    this.props.loadMessages();
  }

  renderMessages() {
    if (this.props.messages) {
      return this.props.messages.map(({ _id, body }) => <Li key={_id}>{body}</Li>);
    }
    return <h5>There are no messages yet :-(</h5>;
  }
  render() {
    return (
      <div>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        <ul>
          {this.renderMessages()}
        </ul>
        <div>
          <StyledLink
            to="/messages/new"
          >
          Add a message!
          </StyledLink>
        </div>
      </div>
    );
  }
}

MessageList.propTypes = {
  messages: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  loadMessages: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => (
  {
    loadMessages() {
      return dispatch(loadMessages());
    },
  }
);

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
