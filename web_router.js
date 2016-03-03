var express = require('express');

var main = require('./controllers/main');
var user = require('./controllers/user');

var config = require('./config');

var router = express.Router();

// home page
router.get('/',user.index);
router.get('/index', user.index);
router.get('/login',user.login);
router.get('/logout',user.logout);//退出
router.post('/login',user.loginIn);
router.get('/indexs', main.indexs);
router.get('/demo', main.demo);
router.get('/data', main.data);
router.get('/mailbox', main.mailbox);
router.get('/profile', main.profile);
module.exports = router;