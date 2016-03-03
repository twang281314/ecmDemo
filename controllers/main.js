/*
主页面.路径配置，页面新增
*/

/*
exports.index = function (req, res, next) {
    //res.cookies['username']="anytao";
    res.cookie('username','anytao',{ maxAge: 20000,httpOnly:true, path:'/'});
    res.cookie('deptname','iscs');
    res.render('index');
};


exports.login=function(req, res, next){
    res.render('page/login');
};
*/
exports.indexs = function (req, res, next) {
    res.render('page/indexs');
};

exports.demo=function(req, res, next){
    res.render('page/demo');
};

exports.data=function(req, res, next){
    res.render('page/data');
};

exports.mailbox=function(req, res, next){
    res.render('page/mailbox');
};
exports.profile=function(req, res, next){
    res.render('page/profile');
};

exports.authLogin=function(req,res,next){
    var userName="";
    res.redirect('index');
}
