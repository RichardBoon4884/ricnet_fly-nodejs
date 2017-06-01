const app = require('express')();
const server = require('http').Server(app);
const mongoose = require('mongoose');

global._core = require('./core');
global._config = require('./config');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://" + _config.db.host + ":" + _config.db.port + "/" + _config.db.name,
    _config.db.user === "" ? NULL : _config.db.user,
    _config.db.password === "" ? NULL : _config.db.password);

app.use("/", require("./routes"));

server.listen(_config.server.port, function() {
    console.log("Server is running on localhost:" + _config.server.port);
});