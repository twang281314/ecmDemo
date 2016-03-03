/**
 * 全局配置文件
 */
var path = require('path');

var config={
    
    //debug为true时表示本地调试
    debug: true,
    //域名
    host: 'localhost',
    //程序运行的端口
    port: 8081,
    
    //log4js配置信息
    log4jsConfig:{
        'appenders': [
            { type: 'console' }, //控制台输出
            {
            type: 'file', //文件输出
            filename: 'logs/access.log', 
            maxLogSize: 1024,
            backups:3,
            category: 'normal' 
            }
        ],
        'levels':{'logInfo':'DEBUG'},
        'replaceConsole': true//增加replaceConsole配置，让所有console输出到日志中
    }
};

module.exports = config;