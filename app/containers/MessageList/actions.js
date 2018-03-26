import { LOAD_MESSAGES } from './constants';

export default function loadMessages(messages) {
  return { type: LOAD_MESSAGES, value: messages };
};
