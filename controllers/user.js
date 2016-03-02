/*
控制器 用户模块
*/

var userControl={
    
    index : function(req, res, next){
        if(!req){
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
        
        res.redirect('user/login');
    },
    
    //post 用户登录 验证用户名
    loginIn : function(req, res ,next){
        var msg={success:'true',message:''};//返回Json对象
        var userId=req.body.userId;
        var passWord=req.body.passWord;
        if(false){
            res.redirect('index');//验证成功跳转到主页面 
        }else{
            msg.message='工号或密码不对';
            res.json(msg);
        }
    }
}

exports=module.exports=userControl;
