/*
主页面
*/


exports.index = function (req, res, next) {
    res.render('index');
};

exports.login=function(req, res, next){
    res.render('login');
};

exports.demo=function(req, res, next){
    res.render('demo');
};

exports.data=function(req, res, next){
    res.render('data');
};

exports.mailbox=function(req, res, next){
    res.render('mailbox');
};