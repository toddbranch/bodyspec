var express = require('express')
		, connection = require('./connection');

var app = express();

var router = express.Router();

var allowCrossDomain = function(req, res, next) {
	res.header('Access-Control-Allow-Origin', "*");
	res.header('Access-Control-Allow-Methods', "GET,PUT,POST,DELETE");
	res.header('Access-Control-Allow-Headers', 'Content-Type');

	next();
}

router.use(allowCrossDomain);

router.get('/users/:id', function (req, res) {
	connection.query('SELECT * FROM users WHERE PatientID = ?', req.params.id, function (err, result) {
		if (err)
			res.end(err);
		else
			res.json(result[0]);
	});
});

router.get('/users/:id/scans', function (req, res) {
	connection.query("SELECT ScanID, MeasureDate FROM scans WHERE PatientID = ?", req.params.id, function (err, result) {
		if (err)
			res.end(err);
		else
			res.send(result);
	});
});

router.get('/scans/:id', function(req, res) {
	connection.query("SELECT * FROM scans WHERE ScanID = ?", req.params.id, function (err, result) {
		if (err)
			res.end(err);
		else
			res.send(result);
	});
});

router.get('*', function(req, res) {
	res.statusCode = 404;
	res.send("Bad Route");
});

app.use('/', router);

app.listen(10000);

console.log('listening on 10000');
