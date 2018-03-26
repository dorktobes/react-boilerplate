import {
  LOAD_MESSAGES,
  LOAD_MESSAGES_SUCCESS,
  LOAD_MESSAGES_ERROR,
} from './constants';

export function loadMessages() {
  return { type: LOAD_MESSAGES };
}

export function loadMessagesSuccess(messages) {
  return { type: LOAD_MESSAGES_SUCCESS, value: messages };
}

export function loadMessagesError(error) {
  return { type: LOAD_MESSAGES_ERROR, error };
}
