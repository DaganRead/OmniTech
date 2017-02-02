var express = require('express'),
	app = express(),
	http = require('http'),
	server = http.createServer(app),
	//SerialPort = require("serialport"),
	io = require('socket.io').listen(server);
	//uno = new SerialPort.SerialPort('COM25', {baudrate: 115200}); //set the port and baudrate

/* Start the server */
server.listen(8000);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res) {
  res.sendfile(__dirname + '/index.html');
});
io.on('connection', function (socket) {
	console.log('new connection on 8000');
	socket.on('submission', function (json) {
		//do something with json. Save to database
	    console.log(json);
	    socket.emit('confirm', 'Your information has been saved!');
	});
});