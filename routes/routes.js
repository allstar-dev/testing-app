//contains all end points for app
var express = require('express');
var router = express.Router();
var cluster = require('cluster');

router.get('/', function(request, response){
	response.json({message:'Hello World.'});
});

router.get('/api/rooms', function(request, response){
	var rooms = [];
	rooms.push({room: 'bedroom'});
	rooms.push({room: 'kitchen'});
	//console.log('Worker %d running!', cluster.worker.id);
	response.json(rooms);
});

module.exports = router;