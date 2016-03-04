$(function () {
    //   DataTables
    //回车后下一个input获得焦点
     $("input").on("keydown",function(e){
        var key = e.which;
        if (key == 13) {

            $(this).parent().parent().next("div").find("input").focus();
            //var key.keyCode = 9;   最好的方案，竟然不好使
        } 
     });
   //layer.msg('欢迎使用layer'); 消息提示
   //新提示框
   layer.open({
        type: 2,
        //skin: 'layui-layer-lan',
        title: 'layer弹层组件',
        fix: false,
        shadeClose: true,
        maxmin: true,
        area: ['1000px', '500px'],
        content: '欢迎使用'

    });
   
   
   
   
   
   
    // Select2 Elements
    //$(".select2").select2();

});