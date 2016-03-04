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
     //页面表格宽展--主表
  var datatables = $.dataTableSetting({
      "aoColumns": [    //排序
            null,
            { "orderSequence": [ "asc" ] },
            { "orderSequence": [ "desc", "asc", "asc" ] },
            { "orderSequence": [ "desc" ] },
            null
        ]
  })
  //页面表格宽展--主表
  $('#example1').DataTable(datatables);
    //选中行颜色
    $('#example1 tbody').on( 'click', 'tr', function () {
        if ( $(this).hasClass('selected') ) {
            $(this).removeClass('selected');
        }
        else {
            $('#example1 tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    });
    
    
    
  //页面表格宽展--新增弹出层的表控件
  var dtSetting = $.dataTableSetting({
      "sScrollX": "100%",
      "sScrollXInner": "110%",
      "bScrollCollapse": true
  })
  //页面表格宽展--新增弹出层的表控件
  $('#exampleNews').DataTable(dtSetting);






    $('button.init').click(function() {
        var data = tableNew.$('input').serialize();
        return false;
    });

    //bug 调试 进行中
    var $datatables = $('#exampleNews');
    var newArry = [];
    var $datatablesLeg = $datatables.find('tbody tr:first-child td').length;
    $datatables.find('tbody tr:first-child td').each(function(e,index) {
        for(i=0; e > i ; i++) {
            var newArry = $(index).css("width");
        }
    });

    var $dataTablesScrollHead = $(".dataTables_scrollHead div.dataTables_scrollHeadInner");
        $dataTablesScrollHead.css("width","100%");
        
        $dataTablesScrollHead.find("table").css("width","100%");
        $dataTablesScrollHead.find("th").css("width","100%");
    //bug调试



    //页面表格宽展--次表
    $('.table-quote , #exampleNewsedit').DataTable({
        "paging": true,
        "lengthChange": false,
        "searching": false,
        "info": true,
        "ordering":false, //排序禁用
        "autoWidth": false //自动宽度禁用
    });


    // Select2 Elements
    $(".select2").select2();
    
   
});