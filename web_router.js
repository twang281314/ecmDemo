var express = require('express');

var main = require('./controllers/main');
var config = require('./config');

var router = express.Router();

// home page
router.get('/', main.index);
router.get('/login', main.login);

module.exports = router;