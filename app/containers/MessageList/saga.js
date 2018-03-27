import fetchMessages from 'utils/fetchMessages';
import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_MESSAGES } from './constants';
import { loadMessagesSuccess } from './actions';

function* getMessages() {
  const messages = yield call(fetchMessages);
  yield put(loadMessagesSuccess(messages));
}

export default function* messagesSaga() {
  yield takeLatest(LOAD_MESSAGES, getMessages);
}
