//测试Promise
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));
var path =require('path');
var logger = require('../lib/logger');
var md5 = require('../lib/md5');

fs.readFileAsync(path.join(__dirname,'data.txt'),'utf-8')
   .then((fileData)=>{
       logger.info(fileData);
       console.log(fileData);
       return fs.writeFileAsync('demo.txt',md5(fileData));
   }).then(function(data){
      console.log(data);
   })
   .catch(function(error){
       logger.error(error);
   });

/*
var fs = require('fs');
var path =require('path');

function readFilePromise(filePath) {
    return new Promise(function (resolve, reject) {
        var data=fs.readFileSync(path.join(__dirname,filePath,'utf-8'),function(error,data){
            if(error){
                reject(new Error(error));
            }else{
                resolve(data);
            }
        });
    });
}

readFilePromise('data.txt').then(data=>{
  console.log(data);
}).catch(error=>console.log(error));
*/
