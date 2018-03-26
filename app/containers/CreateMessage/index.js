import React from 'react';
import { compose } from 'redux';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import messages from './messages';
// import makeSelectMessages from './selectors';

export default class CreateMessage extends React.PureComponent {
  render() {
    return (
      <div>
        <Link to="/">go back to list</Link>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
      </div>
    );
  }
};

// const mapStateToProps = createStructuredSelector({
//   repos: makeSelectRepos(),
//   username: makeSelectUsername(),
//   loading: makeSelectLoading(),
//   error: makeSelectError(),
// });

// const withConnect = connect(mapStateToProps, mapDispatchToProps);

// const withReducer = injectReducer({ key: 'home', reducer });
// const withSaga = injectSaga({ key: 'home', saga });

// export default compose(
//   withReducer,
//   withSaga,
//   withConnect,
// )(HomePage);
