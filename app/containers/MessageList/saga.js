import fetchMessages from 'utils/fetchMessages';
import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_MESSAGES } from './constants';
import { loadMessagesSuccess } from './actions';

function* getMessages() {
  const messages = yield call(fetchMessages);
  yield put(loadMessagesSuccess(messages));
}

export default function* messagesSaga() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_MESSAGES, getMessages);
}
