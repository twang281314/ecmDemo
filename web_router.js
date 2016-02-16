var express = require('express');

var main = require('./controllers/main');
var config = require('./config');

var router = express.Router();

// home page
router.get('/', main.login);
router.get('/index', main.index);

module.exports = router;