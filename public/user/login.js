//记住用户名密码.用户名/密码/是否存储
function save(username,password,checkbox){
    if($(checkbox)!=""){
        $.cookie("rmbUser", "true", { expires: 7 }); //存储一个带7天期限的cookie
        $.cookie("username", username, { expires: 7 });
        $.cookie("password", password, { expires: 7 });
    }else{
        $.cookie("rmbUser", "false", { expire: -1 });
        $.cookie("username", "", { expires: -1 });
        $.cookie("password", "", { expires: -1 });
    }
};

 
    
//登录
function loginSubmit(){
    var  userid=$("input[name=username]").val();
    var  password=$("input[name=password]").val();
    var  checkoxLogin=$(".login-checkbox span").attr("class");//记住账号

    $.ajax({
        url:'/login',
        method:'post',
        data:{userId : userid,passWord: password},
        success:function(data){
            if(data.success){
                if(data.message == "1"){
                    $(".login-user-err-text").text("用户名或密码不对");
                    $(".login-user-err-main").show();
                    $(".login-user-tip-main").hide();
                }else{
                    window.location = "/index";
                    save(userid,password,checkoxLogin);//执行cookie
                }
            }
        }
    });
}
$(function(){
    

    //记住密码
	$(".login-checkbox").click(function(){
		$(".login-checkbox span").toggleClass("active");
	});
    //切换PC/qrcode点击
	$(".login-user-qrcode").click(function(){
		$(".login-user").hide();
		$(".login-qrcode").show();
	});
    //切换PC/qrcode点击
	$(".login-qrcode-pc").click(function(){
		$(".login-user").show();
		$(".login-qrcode").hide();
	});
    //登录提交
   $('#login-submit').click(function(){
       loginSubmit();
   });
   //回车提交
   $("body").on("keydown",function(e){
        var key = e.which;
        if (key == 13) {
            loginSubmit();
        }
   });
   // 用户名非空
   $("input[name=username]").blur(function(){
       var user= $("input[name=username]").val();
       if( user == "" || user == undefined || user == null){
           $(".login-user-err-text").text("请输入用户名");
           $(".login-user-err-main").show();
           $(".login-user-tip-main").hide();
       }else{
           $(".login-user-err-main").hide();
       }
   });
   // 密码非空
   $("input[name=password]").blur(function(){
       var pwd= $("input[name=password]").val();
       if(pwd == "" || pwd == undefined || pwd == null){
           $(".login-user-err-text").text("请输入密码");
           $(".login-user-err-main").show();
           $(".login-user-tip-main").hide();
       }else{
           $(".login-user-err-main").hide();
       }
   });
   //读取cookie
   if ($.cookie("rmbUser") == "true") {
      $(".login-checkbox span").addClass("active");
      $("input[name=username]").val($.cookie("username"));
      $("input[name=password]").val($.cookie("password"));
   }
});