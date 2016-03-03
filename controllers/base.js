
var fs = require('fs');

var baseControl={
    
    //员工列表页
    employeeList : function(req, res, next){
        
          res.render('base/employeeList');
    },
    //员工列表页获取数据
    getEmployeeListData : function(req, res, next){
        
        fs.readFile('test/data.txt','utf-8',function(error,data){
            res.send(data);
        });
    }
}


module.exports=baseControl;