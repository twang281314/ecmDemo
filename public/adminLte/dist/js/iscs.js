
$(document).ready(function(){ 
    //tab菜单
    $("body").on("click",".navd-list",function() {
        var id = $(this).attr("menuid");
        var url = $(this).attr("html-path");

        //删除按钮
        $(this).on("click","i.fa-times-circle-o",function() {
            $(this).parent().remove();
            $("div.iscs-page-item[menuid='"+id+"']").remove();
            var openpage = $("div.iscs-page-item:last");
            var pageid = $(openpage).attr("menuid");
            $(openpage).removeClass("hide").addClass("show");
            $("div.navd-list[menuid='"+pageid+"']").addClass("navd-listbg").find("i").removeClass("hidden");
            return false;
        });
        //刷新按钮
        /*$(this).on("click","i.fa-refresh",function() {
            $("div.iscs-page-item[menuid='"+id+"']").remove();
            createPanel(url,id);
            return false;
        });*/

        $(".navd-menu").children("div.navd-list").removeClass("navd-listbg");
        $(".navd-menu i").addClass("hidden");
        $(this).addClass("navd-listbg");
        $(this).find("i").removeClass("hidden");
        $("div.iscs-page-item[menuid!='"+id+"']").addClass("hide");
        $("div.iscs-page-item[menuid='"+id+"']").removeClass("hide");
        
        //createPanel(url,id);
        
    });
    //点击左侧菜单-加载右侧页面
    $(".sidebar-menu li a.left-addpage").on("click",function(){
        var id = $(this).attr("menuid");
        var url = $(this).attr("html-path");
        var tname = $(this).children("span").text();
        var oldPage = $("div.navd-list[menuid='"+id+"']");
        if(oldPage.length>0){
            $("div.iscs-page-item[menuid!='"+id+"']").removeClass("show").addClass("hide");
            $("div.iscs-page-item[menuid='"+id+"']").removeClass("hide").addClass("show");
            return;
        }
    
        addMenuItem2Nav(id,tname,url);//TAB菜单加载
        createPanel(url,id);//右侧页面加载
    });

    
});


//TAB菜单加载
function addMenuItem2Nav(id,tname,href){
		 var music ="<div class='navd-list show1' menuid='"+id+"' html-path='"+href+"'><i class='pull-right fa fa-times-circle-o text-muted font-size-16'></i>";
             music+="<i class='pull-right fa fa-refresh hidden text-muted'></i><span>"+tname+"</span></div>";
             
       $(".navd-menu i").addClass("hidden");
       $('.navd-menu').append(music);
       $(".navd-menu div.navd-list[menuid]").removeClass("navd-listbg");
       $(".navd-menu div.navd-list[menuid='"+id+"']").addClass("navd-listbg");
}










//测试通过，加载页面
function createPanel(url,menuid){
    $("#main-content").children("div").addClass("hide");
	var $view = $("<div class='iscs-page-item' menuid='"+menuid+"' html-path='"+url+"'></div>");
	$.get(url,function(data){
		$view.html(data);
	});
	$("#main-content").append($view);
}

//标签最大宽度控制
var maxwidth = $("body").width();

//TAB左侧箭头单击
var $isnavlist = $(".navd-menu");
$(".navd-p").click(function (){
    if (!$isnavlist.is(':animated')) {
        var $isnavtitelenl = $(".navd-menu div").length;
        var $isnavwidth = $isnavtitelenl * 108;
        var $navshow = $(".navd-menu div.show1").first();
        var $navshowall = $(".navd-menu div.show1").length;
        var $navshowwth = $navshowall * 108;
        if($isnavwidth <= maxwidth-230){
            alert("可见个数不够");
            return false;
        };//如果可见个数不够则停止*/
        if($navshowwth <= maxwidth-230){
            alert("后面没有标签");
            return false;
        };//如果后面没有标签则停止
        $navshow.addClass("hide1").removeClass("show1").hide("slow");
    };
});
//TAB右侧箭头单击
$(".navd-n").click(function (){
    if (!$isnavlist.is(':animated')) {
        var $isnavtitelenl = $(".header-navlist-fls div").length;
        var $isnavwidth = $isnavtitelenl * 108;
        var $navhide = $(".header-navlist-fls div.hide1").last();
        var $navshowall = $(".header-navlist-fls div.hide1").length;
        if($isnavwidth <= maxwidth-230){
            return false;
        };//如果可见个数不够则停止
        if($navshowall <= 0){
            return false;
        };//如果前面没有标签则停止
        $navhide.addClass("show1").removeClass("hide1").show("slow");
        
    };
});










//tab标题的关闭
$(".header-nav-center").on("click",".header-navlist .tab-item i.icon-remove",function(){
    var id = $(this).parent().find("a").attr("menuid");   
    
    $(this).parent().parent().remove();//标题
    var $curView = $("div[ng-view]").parent().find("div[menuid='"+id+"']");
    var $preView = $curView.prev();
    if(!$preView.hasClass("iscs-page-item")&&$curView.next().length>0){		    	 
    $preView = $curView.next();
    }
    //判断是否有隐藏的，显示最后一个
    var $erpnavhideif = $(".header-navlist-fls div.hide1").length;
    var $erpnavhidelast = $(".header-navlist-fls div.hide1").last();
    if ($erpnavhideif > 0) {
        $erpnavhidelast.addClass("show1").removeClass("hide1").show("slow");
    };
        $curView.remove();
        if($preView){
            var preMenuid = $preView.attr("menuid");
            if(preMenuid){
                $(".header-navlist div.tab-item[menuid='"+preMenuid+"']").removeClass("nav-title").addClass("nav-title-check");
            }
            $preView.removeClass("hide").addClass("show");
        }
    
});




