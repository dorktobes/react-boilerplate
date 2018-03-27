import {
  UPDATE_QUERY,
  POST_MESSAGE,
  POST_MESSAGE_SUCCESS,
} from './constants';

export function changeQuery(body) {
  return {
    type: UPDATE_QUERY,
    query: body,
  };
}

export function postMessage(body) {
  return {
    type: POST_MESSAGE,
    body,
  };
}

export function postMessageSuccess() {
  return {
    type: POST_MESSAGE_SUCCESS,
  };
}
