
var fs = require('fs');

var baseControl={
    
    employeeList : function(req, res, next){
        
          res.render('base/employeeList');
    },
    getEmployeeListData : function(req, res, next){
        
        fs.readFile('test/data.txt','utf-8',function(error,data){
            res.send(data);
        });
    }
}


module.exports=baseControl;