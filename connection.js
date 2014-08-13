var mysql = require('mysql');

var db_config = {
	host			: 'localhost',
	user			: 'root',
	password	: '2772362'
};

var connection;

function setupDatabase() {
	connection = mysql.createConnection(db_config);

	connection.connect(function(err) {
		if (err) {
			console.log('error when connection to db:', err);
			setTimeout(setupDatabase, 2000);
		}
	});

	connection.on('error', function(err) {
		console.log('db error', err);
		if (err.code === 'PROTOCOL_CONNECTION_LOST') {
			setupDatabase();
		} else {
			throm err;
		}
	});

	connection.query('USE bodyspec', function(err, result) {
		if (err)
			console.log(err);
	});
}

setupDatabase();


module.exports = connection;
