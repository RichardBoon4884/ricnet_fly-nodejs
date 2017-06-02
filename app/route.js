const router = require("express").Router();

routes.use('/airports', function() {require('../modules/airports/routes')});

module.exports = router;