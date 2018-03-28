import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { PropTypes } from 'prop-types';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import H1 from '../MessageList/H1';
import StyledLink from './StyledLink';
import Input from './Input';
import messages from './messages';
import { changeQuery, postMessage } from './actions';
import { makeSelectQuery } from './selectors';
import reducer from './reducers';
import saga from './saga';

 /* eslint-disable import/no-mutable-exports */
let rerouteCreateMessageOnSuccess;

class CreateMessage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onSubmit = this.props.onSubmit.bind(this);
    rerouteCreateMessageOnSuccess = rerouteOnSuccess.bind(this);
  }

  render() {
    return (
      <div>
        <StyledLink to="/">go back to list</StyledLink>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        <form
          onSubmit={this.onSubmit}
        >
          <Input
            type="text"
            onChange={this.props.onQueryChange}
          ></Input>
        </form>
      </div>
    );
  }
}

CreateMessage.propTypes = {
  onQueryChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

function rerouteOnSuccess() {
  this.props.history.push('/');
}

export { rerouteCreateMessageOnSuccess };

const mapDispatchToProps = (dispatch) => (
  {
    onQueryChange(event) {
      event.preventDefault();
      return dispatch(changeQuery(event.target.value));
    },
    onSubmit(event) {
      event.preventDefault();
      const body = makeSelectQuery();
      return dispatch(postMessage(body));
    },
  }
);

const mapStateToProps = createStructuredSelector({
  query: makeSelectQuery(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'createMessage', reducer });
const withSaga = injectSaga({ key: 'createMessage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(CreateMessage);
