var cluster = require('cluster');

if (process.env.NODE_ENV !== 'test') {
	// Code to run if we're in the master process
	if (cluster.isMaster) {

		// Count the machine's CPUs
	    var cpuCount = require('os').cpus().length;

	    // Create a worker for each CPU
	    for (var i = 0; i < cpuCount; i += 1) {
	        cluster.fork();
	    }

	// Code to run if we're in a worker process
	} else {
		runServer();
	} 
} else {
	runServer();
}

function runServer(){
	var express = require('express');
	var app = express();
	var bodyParser = require('body-parser');
	var cors = require('cors');


	var routes = require('./routes/routes.js');

	var port = 8880;
	app.use(cors());
	app.use(bodyParser.json());

	app.use('/',routes);


	app.listen(port, function(){
		console.log('App listening on port: ' + port);
	});

	module.exports = app;
}

