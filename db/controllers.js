require('./index.js');

const { Message } = require('./schema');

const getMessages = () => Message.find({});

const saveMessage = ({ body }) => {
  const message = new Message({ body });
  return message.save();
};

module.exports = {
  getMessages,
  saveMessage,
};
