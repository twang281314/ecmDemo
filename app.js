var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var config = require('./config');
var webRouter = require('./web_router');
var app = express();

// 静态文件目录
var staticDir = path.join(__dirname, 'public');

// configuration in all env
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('ejs-mate'));

//app.locals._layoutFile = 'layout.html';

//静态资源
app.use('/public', express.static(staticDir));

//解析客户端请求的body
app.use(bodyParser.json({limit: '50mb'})); // 限制上传5M
app.use(bodyParser.urlencoded({ extended: false , limit: '50mb' }));

//加载用于解析Cookie的中间件
app.use(cookieParser());

// 路由
app.use('/', webRouter);

app.listen(config.port, function () {
console.log('ecm listening on port', config.port);
console.log('God bless love....');
});