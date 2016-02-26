var express = require('express');

var main = require('./controllers/main');
var config = require('./config');

var router = express.Router();

// home page
router.get('/', main.login);
router.get('/login', main.login);
router.get('/index', main.index);
router.get('/indexs', main.indexs);
router.get('/demo', main.demo);
router.get('/data', main.data);
router.get('/mailbox', main.mailbox);

module.exports = router;