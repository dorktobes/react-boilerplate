import 'whatwg-fetch';

const parseJSON = (response) => response.json();

export default function postMessage(body) {
  return fetch('http://localhost:3000/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ body }),
  })
  .then(parseJSON);
}
