const app = require('express')();
const server = require('http').Server(app);
const mongoose = require('mongoose');

global._config = require('./config');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/' . _config.db.name);

