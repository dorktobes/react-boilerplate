import postMessages from 'utils/postMessage';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { makeSelectQuery } from './selectors';
import { rerouteCreateMessageOnSuccess } from './index';
import {
  POST_MESSAGE,
} from './constants';

function* postMessageGenerator() {
  const body = yield select(makeSelectQuery());
  if (typeof body === 'string' && body.length) {
    yield call(() => postMessages(body));
    yield put(rerouteCreateMessageOnSuccess());
  }
}

export default function* postMessageSaga() {
  yield takeLatest(POST_MESSAGE, postMessageGenerator);
}
