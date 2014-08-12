var mysql = require('mysql');

var connection = mysql.createConnection({
	host			: 'localhost',
	user			: 'root',
	password	: '2772362'
});

connection.connect();

connection.query('USE bodyspec', function(err, result) {
	if (err)
		console.log(err);
});

module.exports = connection;
