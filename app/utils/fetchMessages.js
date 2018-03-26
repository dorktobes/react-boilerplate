import 'whatwg-fetch';

const parseJSON = (response) => {
  return response.json();
};

export default function fetchMessages() {
  return fetch('http://localhost:3000/messages')
    .then(parseJSON);
};
