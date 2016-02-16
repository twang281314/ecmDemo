/*
主页面
*/


exports.index = function (req, res, next) {
    res.render('index');
};

exports.login=function(req, res, next){
    res.render('login');
};