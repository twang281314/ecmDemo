/*
控制器 用户模块
*/

var userControl={
    
    index : function(req, res, next){
        if(req.session.userId){
          res.render('index');
        }else{
          res.redirect('login');
        }
    },
    //the method is for get
    login : function(req, res ,next){
        
        res.render('user/login');
    },
    
    //post
    logout : function(req, res, next){
        
        //res.clearCookie('userId');//清除cookie
        //res.clearCookie('deptname');//清除cookie
        req.session.userId=null;
        res.redirect('login');
    },
    
    //post 用户登录 验证用户名
    loginIn : function(req, res ,next){
        var msg={success:'true',message:''};//返回Json对象
        var userId=req.body.userId;
        var passWord=req.body.passWord;
        if(userId==='admin'&&passWord==='admin'){
            //res.cookie('userId',userId);
            req.session.userId=userId;
            //res.redirect('index');//验证成功跳转到主页面
            res.json(msg);

        }else{
            msg.message='工号或密码不对';
            res.json(msg);
        }
    }
}

exports=module.exports=userControl;
