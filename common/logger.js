/*
日志模块
*/

var log4js = require( 'log4js' ),
	config = require( '../config' );

log4js.configure( config.log4jsConfig );

//module.exports = log4js.getLogger('logInfo');
module.exports = log4js.getLogger('normal');
