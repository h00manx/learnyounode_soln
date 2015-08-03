// create a simple TCP time server
// time format: "YYYY-MM-DD hh:mm"
// used strftime

var net = require('net');
var strftime = require('strftime');

var server = net.createServer(function(socket) {
	var d = new Date();
	var fmt_date = strftime("%Y-%m-%d %H:%M\n");
	socket.write(fmt_date);
	socket.end();
});

server.listen(process.argv[2]);