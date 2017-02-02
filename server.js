var express = require('express'),
	app = express(),
	http = require('http'),
	server = http.createServer(app),
	io = require('socket.io').listen(server);

/* Start the server */
server.listen(8000);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res) {
  res.sendfile(__dirname + '/index.html');
});
app.get('/agritech', function(req,res) {
  res.sendfile(__dirname + '/agritech.html');
});
app.get('/oceantech', function(req,res) {
  res.sendfile(__dirname + '/oceantech.html');
});
app.get('/aerotech', function(req,res) {
  res.sendfile(__dirname + '/aerotech.html');
});
io.on('connection', function (socket) {
	console.log('new connection on 8000');
	socket.on('submission', function (json) {
		//do something with json. Save to database
	    console.log(json);
	    socket.emit('confirm', 'Your information has been saved!');
	});
});