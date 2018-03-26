import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_MESSAGES } from './constants';
import loadMessages from './actions';
import fetchMessages from 'utils/fetchMessages';

function* getMessages() {
    const messages = yield call(fetchMessages);
    console.log('in saga', messages);
    yield put(loadMessages(messages));
};

export default function* messagesSaga() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_MESSAGES, getMessages);
}
