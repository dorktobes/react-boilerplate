import { takeLatest } from 'redux-saga/effects';
import messageSaga, { getMessages } from '../saga';
import { LOAD_MESSAGES } from '../constants';

/* eslint-disable redux-saga/yield-effects */
describe('messageSaga', () => {
  const msgSaga = messageSaga();

  it('should start task to watch from LOAD_MESSAGES action', () => {
    const takeLatestDescriptor = msgSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(LOAD_MESSAGES, getMessages));
  });
});
