import 'whatwg-fetch';

const parseJSON = (response) => response.json();

export default function fetchMessages() {
  return fetch('http://localhost:3000/messages')
    .then(parseJSON);
}
