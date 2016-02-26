function add(){
    createPanel("demo","1");
}
function createPanel(url,menuid){
	var $view = $("<div menuid='"+menuid+"' html-path='"+url+"'></div>");
	$.get(url,function(data){
			$view.html(data);
	});
	$("#main-content").append($view);
}//测试通过，加载页面






