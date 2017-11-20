var mysql = require('mysql');
import cfg from '../../config/app.js';

var conn = mysql.createConnection(
	cfg.mysql
);

conn.connect(function (err) {
	if(err) {
		console.log('mysql connect failed! : err'+err);
	}
	console.log('mysql connect success!');
});

export default conn;

function handleError (err) {
	if(err) {
		if(err.code === 'PROTOCOL_CONNECTION_LOST') {
			connect();
		}else{
			console.error(err.stack || err);
		}
	}
}

function connect () {
	db = mysql.createConnection(cfg.mysql);
	db.connect(handleError);
	db.on('error',handleError);
}

var db;
connect();