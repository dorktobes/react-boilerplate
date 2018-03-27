import postMessages from 'utils/postMessage';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { makeSelectQuery } from './selectors';
import { postMessageSuccess } from './actions';
import {
  POST_MESSAGE,
} from './constants';

function* postMessageGenerator() {
  const body = yield select(makeSelectQuery());
  if (typeof body === 'string' && body) {
    yield call(postMessages.bind(null, body));
    yield put(postMessageSuccess());
  }
}

export default function* postMessageSaga() {
  yield takeLatest(POST_MESSAGE, postMessageGenerator);
}
