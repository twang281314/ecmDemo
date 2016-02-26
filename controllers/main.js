/*
主页面
*/


exports.index = function (req, res, next) {
    //res.cookies['username']="anytao";
    res.cookie('username','anytao',{ maxAge: 20000,httpOnly:true, path:'/'});
    res.cookie('deptname','iscs');
    res.render('index');
};
exports.indexs = function (req, res, next) {
    res.render('indexs');
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