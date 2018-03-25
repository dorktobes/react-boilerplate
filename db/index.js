const mongoose = require('mongoose');
const db = mongoose.connection;
const logger = require('../server/logger');

db.on('open', logger.dbOpen);

db.on('error', logger.error.bind(null));

mongoose.connect('mongodb://toby:toby@ds119489.mlab.com:19489/messagedb');
